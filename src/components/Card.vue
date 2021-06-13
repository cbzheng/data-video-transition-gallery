<template>
  <div>
    <div>
      <transition name="flip">
        <div class="card" :key="cardFlip">
          <div
            class="card-header"
            :style="{
              backgroundColor: nrColor,
            }"
          >
            {{ card.card_title }}
          </div>
          <div v-if="!cardFlip">
            <img
              class="card-img front-preview"
              :src="
                './assets/card/card-front/card-front-static/front_' +
                card.card_id +
                '.' +
                cardSrc
              "
              @click="changeSource()"
            />
            <div id="card-data-operations-preference">
              <CardDataTag
                :dataOperationName="card.DO_tag"
                appearTimes="1"
                color="blue"
              />
            </div>
            <div class="card-body">
              <div class="card-body-subtitle">HOW</div>
              <div class="card-body-text">
                {{ how }}
              </div>
              <div class="card-body-subtitle">WHY</div>
              <div class="card-body-text">
                {{ why }}
              </div>
            </div>
          </div>
          <div v-else>
            <img
              class="card-img front-gif"
              :src="
                './assets/card/card-back/card-back-gif/back_' +
                card.card_id +
                '.gif'
              "
              alt="./assets/image/fail_loading.svg"
            />
            <div class="card-body">
              <div class="card-body-subtitle">{{ card.eg_title }}</div>
              <div class="card-body-text">
                <div class="card-body-text-line">
                  <span><b>Source</b></span> {{ card.eg_source }}
                </div>
                <div class="card-body-text-line">
                  <span><b>Published Year</b></span> {{ card.eg_year }}
                </div>
                <div class="card-body-text-line">
                  <span><b>Category</b></span> {{ card.eg_category }}
                </div>
                <div class="card-body-text-line">
                  <span><b>Subcategory</b></span> {{ card.eg_subcategory }}
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div v-if="!cardFlip">
              <span class="card-footer-num">No. {{ card.card_id }}</span>
              <span class="card-footer-btn" v-on:click="toggleCard()">
                view examples
              </span>
            </div>
            <div v-else>
              <a :href="card.eg_url" target="_blank" rel="noopener noreferrer">
              <span class="card-footer-url"></span>URL
              </a>
              <span class="card-footer-btn" v-on:click="toggleCard()">
                back to front
              </span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import CardDataTag from "./CardDataTag.vue";

export default {
  name: "Card",
  components: {
    CardDataTag,
  },
  props: {
    how: String,
    why: String,
    nrColor: String,
    card: Object,
  },
  data: function () {
    return {
      cardFlip: Boolean,
      cardSrc: String,
    };
  },
  mounted: function () {
    // Show the front side of the card at first
    this.cardFlip = false;
    this.cardSrc = "png";
  },
  methods: {
    toggleCard: function () {
      this.cardFlip = !this.cardFlip;
    },
    changeSource: function () {
      if (this.cardSrc == "png") this.cardSrc = "gif";
      else this.cardSrc = "png";
    },
  },
};
</script>

<style scoped>
.card-header {
  padding: 0.25rem 1rem 0.5rem;
  border: transparent;
  margin-top: 1em;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  display: flex;
  flex-direction: row;
}

.card {
  background-color: #ffffff;
  border: transparent;
  box-shadow: 3px 4px 8px 4px rgba(92, 92, 92, 0.08);
  border-radius: 0.375rem;
  margin-left: 0;
  margin-right: 0;
  display: block;
  width: 360px;
  height: 520px;
  border-radius: 7px;
  text-align: center;
  line-height: 27px;
  position: relative;
  font-weight: 600;
  font-size: 20px;
  will-change: transform;
  z-index: 0;
}

.card-deck .card-body {
  flex: 1 1 auto;
  color: #000000;
  padding: 0 1rem;
  margin: 1rem 0;
  text-align: left;
  overflow-y: auto;
}

.card-deck .card-body-subtitle {
  font-size: 0.8rem;
  font-weight: 600;
}

.card-deck .card-body .card-body-text + .card-body-subtitle,
.card-deck .card-body-caption {
  margin-top: 1rem;
}

.card-deck .card-body-text {
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1rem;
}

.card-deck .card-body-caption > * {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
}

.card-deck .card-body-caption span {
  font-size: 0.75rem;
  font-weight: 600;
}

.flip-enter-active {
  transition: all 0.6s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}

#card-data-operations-preference {
  text-align: left;
  padding-top: 0.5em;
}

.card-footer {
  height: 3.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  text-align: left;
}

.card-deck .card-footer-num,
.card-deck .card-footer a {
  font-size: 1rem;
  font-weight: 600;
}

.card-footer-btn {
  background-color: rgb(240, 240, 240);
  color: black;
  border: 1px solid white;
  border-radius: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 1rem;
  font-weight: normal;
  margin-left: 0.5em;
  position: fixed;
  right: 1rem;
  cursor: pointer;
}

.card-img {
  cursor: pointer;
  transition: 0.5s;
}

.card-body-text-line {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}

.card-footer-url {
    content: "";
    width: 16px;
    height: 16px;
    background-image: url(../../public/assets/icon/icon_sprite.svg);
    background-position: -100px -20px;
    background-repeat: no-repeat;
    display: inline-block;
    margin-right: 0.5rem;
}


</style>