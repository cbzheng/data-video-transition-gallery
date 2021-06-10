<template>
  <div>
    <div
      v-for="(nrCardsGroup, NRName) in activeNRCardsGroups"
      :key="NRName"
      :id="NRName"
      :class="NRName"
    >
      <a :name="NRName"></a>
      <div v-show="!NRFilter[NRName]" class="display-reminder">
        <div class="reminder-content">
          <div>
            <span
              class="scrollSpy-btn-symbol"
              :style="{
                backgroundColor: NarrativeRelationships[NRName].NR_color,
              }"
            ></span>
            <span class="reminder-name">
              <b>{{ NRName }}</b>
            </span>
          </div>
          <div class="nr_descriptions">
            <p>
              <span
                class="nr-desc-key"
                :style="{
                  backgroundColor: NarrativeRelationships[NRName].NR_color,
                }"
                >Definition</span
              >
              {{ NarrativeRelationships[NRName].NR_desc }}
            </p>
            <p>
              <span
                class="nr-desc-key"
                :style="{
                  backgroundColor: NarrativeRelationships[NRName].NR_color,
                }"
                >Indicating Words</span
              >
              {{
                '"' +
                NarrativeRelationships[NRName].NR_indicator.join('", "') +
                '"'
              }}
            </p>
            <p>
              <span
                class="nr-desc-key"
                :style="{
                  backgroundColor: NarrativeRelationships[NRName].NR_color,
                }"
                >Example</span
              >
              {{
                NarrativeRelationships[NRName].NR_example.before +
                " -> " +
                NarrativeRelationships[NRName].NR_example.after
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <!-- <div v-for="(doCardGroup, DOName) in nrCardsGroup" :key="DOName"> -->
        <Card
          v-for="card in nrCardsGroup"
          :key="card.card_title"
          :card="card"
          :how="TransitionEffectDict[card.TE_tag].how"
          :why="TransitionEffectDict[card.TE_tag].why"
          :nrColor="NarrativeRelationships[NRName].NR_color"
        />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { fetchTransitionCards } from "../api";
import Card from "./Card.vue";
import { mapState } from "vuex";

export default {
  name: "DesignSpaceGallery",
  components: {
    Card,
  },
  data: function () {
    return {
      cards: Array,
      activeNRCardsGroups: Object,
    };
  },
  computed: {
    ...mapState({
      NRCollection: (state) => state.designSpace.narrativeRelationships,
      DOCollection: (state) => state.designSpace.ataOperations,
      ELCollection: (state) => state.designSpace.editorialLayers,
      TransitionEffects: (state) => state.designSpace.transitionEffects,
      TransitionCards: (state) => state.designSpace.transitionCards,
      NRFilter: (state) => state.filter.NRFilter,
      DOFilter: (state) => state.filter.DOFilter,
      NRFilterChangeNotifier: (state) => state.filter.NRFilterChangeNotifier,
      DOFilterChangeNotifier: (state) => state.filter.DOFilterChangeNotifier,
    }),
    TransitionEffectDict: function () {
      const dict = {};
      this.TransitionEffects.forEach((effect) => {
        dict[effect.TE_tag] = {
          how: effect.how,
          why: effect.why,
        };
      });
      return dict;
    },
    NarrativeRelationships: function () {
      if (this.NRCollection == undefined || this.NRCollection[0] == undefined) {
        return {};
      }
      const NRs = {};
      this.NRCollection.forEach((NR) => {
        NRs[NR.NR_tag] = NR;
      });

      return NRs;
    },
    NRCardsGroups: function () {
      if (this.cards == undefined || this.cards[0] == undefined) {
        return {};
      }
      const cardsGroups = {};

      for (let index = 0; index < this.cards.length; index++) {
        const card = this.cards[index];
        const tag = card.NR_tag;
        if (!(tag in cardsGroups)) {
          cardsGroups[tag] = [];
        }

        const nrGroup = cardsGroups[tag];
        // const doTag = card.DO_tag;
        // if (!(doTag in nrGroup)) {
        //   nrGroup[doTag] = [];
        // }
        nrGroup.push(card);
      }

      return cardsGroups;
    },
  },
  watch: {
    NRCardsGroups: {
      handler(val) {
        this.activeNRCardsGroups = {};
        for (const key in val) {
          if (Object.hasOwnProperty.call(val, key) && !this.NRFilter[key]) {
            const element = val[key];
            this.activeNRCardsGroups[key] = element;
          }
        }
      },
      deep: true,
    },
    NRFilterChangeNotifier: function () {
      this.activeNRCardsGroups = {};
      for (const key in this.NRCardsGroups) {
        if (!this.NRFilter[key]) {
          const element = this.NRCardsGroups[key];
          this.activeNRCardsGroups[key] = element;
        }
      }
    },
  },
  beforeMount: async function () {
    this.cards = await fetchTransitionCards();
  },
};
</script>

<style scoped>
.reminder-name {
  font-size: 20px;
}

.nr-desc-key {
  color: white;
  border: 1px solid;
  border-radius: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 14px;
}

.DO-reminder {
  text-align: left;
  margin-left: 4rem;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 0.75rem;
  padding-right: 7.625rem;
}

.card-deck {
  margin-left: 3rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
}

.reminder-symbol {
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 50vh;
  display: inline-block;
  position: absolute;
  left: -1px;
  top: 25%;
  transform: translateY(-50%);
  align-self: center;
}

.display-reminder {
  width: 100%;
  padding: 0;
  margin-bottom: 1rem;
  position: sticky;
  top: -1px;
  z-index: 300;
  opacity: 1;
  transition: opacity 0.2s cubic-bezier(0.28, 0.11, 0.32, 1);

  background: hsla(0, 0%, 100%, 0.75);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

.reminder-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  box-shadow: none;
  border-bottom: transparent;
  backdrop-filter: none;
  transition: background-color 0.3s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition: box-shadow 0.3s cubic-bezier(0.28, 0.11, 0.32, 1);
}

.reminder-content {
  text-align: left;
  width: 100%;
  padding-top: 1.25rem;
  padding-bottom: 0.75rem;
  padding-left: 3.625rem;
  padding-right: 7.625rem;
  margin: 0;
  position: relative;
  z-index: 10;
}

.nr_descriptions {
  margin-top: 1.2em;
  line-height: 1em;
}

.scrollSpy-btn-symbol {
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 50vh;
  display: inline-block;
  flex-shrink: 0;
  align-self: center;
  margin-left: 1px;
  margin-right: 7px;
}
</style>