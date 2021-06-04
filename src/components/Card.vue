<template>
  <div>
    <div v-on:click="toggleCard()">
      <transition name="flip">
        <div class="card" :key="cardFlip">
          <div class="card-header"
          :style="{
                  backgroundColor: nrColor,
                }">
            {{ cardTitle }}
          </div>
          <div v-if="!cardFlip">
            <img
              class="card-img front-preview"
              :src="
                './assets/card/card-front/card-front-static/front_' +
                cardID +
                '.png'
              "
            />
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
                './assets/card/card-back/card-back-gif/back_' + cardID + '.gif'
              "
              alt="./assets/image/fail_loading.svg"
            />
            <div class="card-body">
              <div class="card-body-subtitle">{{ egTitle }}</div>
              <div class="card-body-text">
                  <div><span><b>Source</b></span> {{egSource}}</div>
                  <div><span><b>Published Year</b></span> {{egYear}}</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardID: Number,
    cardTitle: String,
    how: String,
    why: String,
    egTitle: String,
    egSource: String,
    egYear: String,
    egURL: String,
    nrColor: String
  },
  data: function () {
    return {
      cardFlip: Boolean,
    };
  },
  mounted: function () {
    // Show the front side of the card at first
    this.cardFlip = false;
  },
  methods: {
    toggleCard: function () {
      this.cardFlip = !this.cardFlip;
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
  color: #fff;;
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
  width: 300px;
  height: 450px;
  border-radius: 7px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  font-weight: 600;
  font-size: 20px;
  will-change: transform;
  z-index: 0;
}

.card-deck .card-body {
  color: #000000;
  padding: 0 1rem;
  margin: 1rem 0;
  text-align: left;
  overflow-y: auto;
}

.card-deck .card-body-subtitle {
  font-size: 0.75rem;
  font-weight: 600;
}

.card-deck .card-body .card-body-text + .card-body-subtitle,
.card-deck .card-body-caption {
  margin-top: 1rem;
}

.card-deck .card-body-text {
  font-size: 0.65rem;
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
</style>