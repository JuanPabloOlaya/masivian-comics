<template>
  <div class="rate-star" @mouseleave="hoveredValue = value">
    <div class="rate-star__option">
      <label
        for="1-star"
        class="rate-star__label"
        :class="{'rate-star--selected': hoveredValue >= 1 || value >= 1 }"
        @mouseenter="hoveredValue = 1"
      >
        <i
          class="mdi rate-star__icon"
          :class="{
            'mdi-star-outline': hoveredValue < 1,
            'mdi-star': hoveredValue >= 1  || value >= 1,
          }"
        />
      </label>
      <input
        type="radio"
        class="rate-star__input"
        @input="updateValue"
        name="comicRate"
        id="1-star"
        :value="1"
      >
    </div>
    <div class="rate-star__option">
      <label
        for="2-star"
        class="rate-star__label"
        :class="{'rate-star--selected': hoveredValue >= 2  || value >= 2}"
        @mouseenter="hoveredValue = 2"
      >
        <i
          class="mdi rate-star__icon"
          :class="{
            'mdi-star-outline': hoveredValue < 2,
            'mdi-star': hoveredValue >= 2  || value >= 2,
          }"
        />
      </label>
      <input
        type="radio"
        class="rate-star__input"
        @input="updateValue"
        name="comicRate"
        id="2-star"
        :value="2"
      >
    </div>
    <div class="rate-star__option">
      <label
        for="3-star"
        class="rate-star__label"
        :class="{'rate-star--selected': hoveredValue >= 3  || value >= 3}"
        @mouseenter="hoveredValue = 3"
      >
        <i
          class="mdi rate-star__icon"
          :class="{
            'mdi-star-outline': hoveredValue < 3,
            'mdi-star': hoveredValue >= 3  || value >= 3,
          }"
        />
      </label>
      <input
        type="radio"
        class="rate-star__input"
        @input="updateValue"
        name="comicRate"
        id="3-star"
        :value="3"
      >
    </div>
    <div class="rate-star__option">
      <label
        for="4-star"
        class="rate-star__label"
        :class="{'rate-star--selected': hoveredValue >= 4  || value >= 4}"
        @mouseenter="hoveredValue = 4"
      >
        <i
          class="mdi rate-star__icon"
          :class="{
            'mdi-star-outline': hoveredValue < 4,
            'mdi-star': hoveredValue >= 4  || value >= 4,
          }"
        />
      </label>
      <input
        type="radio"
        class="rate-star__input"
        @input="updateValue"
        name="comicRate"
        id="4-star"
        :value="4"
      >
    </div>
    <div class="rate-star__option">
      <label
        for="5-star"
        class="rate-star__label"
        :class="{'rate-star--selected': hoveredValue >= 5  || value >= 5}"
        @mouseenter="hoveredValue = 5"
      >
        <i
          class="mdi rate-star__icon"
          :class="{
            'mdi-star-outline': hoveredValue < 5,
            'mdi-star': hoveredValue >= 5  || value >= 5,
          }"
        />
      </label>
      <input
        type="radio"
        class="rate-star__input"
        @input="updateValue"
        name="comicRate"
        id="5-star"
        :value="5"
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'RateStar',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    hoveredValue: 0,
  }),
  methods: {
    updateValue(event) {
      const { value } = event.target;
      this.$emit('input', parseInt(value, 32));
    },
  },
};
</script>
