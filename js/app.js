var calculator = new Vue({
	el: '#calculator',
	data: {
		totalBrewedContent: 200,
		requiredGrounds: 12
	},
	methods: {
		updateGrounds: function () {
			this.$set('requiredGrounds', this.totalBrewedContent/(50/3))
		},
		updateBrewed: function () {
			this.$set('totalBrewedContent', this.requiredGrounds*(50/3))
		}
	},
	computed: {
		totalBrewTime: function () {
			return this.requiredGrounds*10;
		},
		bpTime: function () {
			return this.totalBrewTime*(1/4);
		},
		mpTime: function(){
			return this.totalBrewTime*(1/4);
		},
		tpTime: function(){
			return this.totalBrewTime*(1/2);
		},
		bpWater: function(){
			return this.totalBrewedContent*(1/4);
		},
		mpWater: function(){
			return this.totalBrewedContent*(1/4);
		},
		tpWater: function(){
  			return this.totalBrewedContent*(1/2);
		}
	}
})