<template>
  <div>TEST</div>
  <img :src="restaurantIcon" alt="" />
</template>

<script>
export default {
  name: 'ReceptionView'
};

const restaurantIcon = () => {
  return '../../public/favicon.ico';
};
</script>
