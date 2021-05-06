<template>
  <div>
    <div v-for="(nrCardsGroup, NRName) in NRCardsGroups" :key="NRName">
      <div class="display-reminder">
        <div class="reminder-content">
          <div>
            <h3>{{ NRName }}</h3>
          </div>
          <p>{{ NarrativeRelationships[NRName].NR_desc }}</p>
        </div>
      </div>

      <div v-for="(doCardGroup, DOName) in nrCardsGroup" :key="DOName">
        <div class="DO-reminder">
          {{ DOName }}
        </div>
        <div class="card-deck">
          <div v-for="card in doCardGroup" :key="card.card_id">
            <Card
              :cardTitle="card.card_title"
              :cardID="card.card_id"
              :how="card.how"
              :why="card.why"
              :egTitle="card.eg_title"
              :egSource="card.eg_source"
              :egYear="card.eg_year"
              :egURL="card.eg_url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchTransitionCards } from "../api";
import Card from "./Card.vue";

export default {
  name: "DesignSpaceGallery",
  components: {
    Card,
  },
  props: {
    NRCollection: Array,
  },
  data: function () {
    return {
      cards: Array,
    };
  },
  computed: {
    NarrativeRelationships: function () {
      if (this.NRCollection[0] == undefined) {
        return {};
      }
      const NRs = {};
      this.NRCollection.forEach((NR) => {
        NRs[NR.NR_tag] = NR;
      });

      return NRs;
    },
    NRCardsGroups: function () {
      if (this.cards[0] == undefined) {
        return {};
      }
      const cardsGroups = {};

      for (let index = 0; index < this.cards.length; index++) {
        const card = this.cards[index];
        const tag = card.NR_tag;
        if (!(tag in cardsGroups)) {
          cardsGroups[tag] = {};
        }

        const nrGroup = cardsGroups[tag];
        const doTag = card.DO_tag;
        if (!(doTag in nrGroup)) {
          nrGroup[doTag] = [];
        }
        nrGroup[doTag].push(card);
      }

      return cardsGroups;
    },
  },
  beforeMount: async function () {
    this.cards = await fetchTransitionCards();
  },
};
</script>

<style scoped>
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

  background: hsla(0, 0%, 100%, .75);
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
</style>