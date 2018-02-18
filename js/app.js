var calculator = new Vue({
	el: '#calculator',
	data: {
		totalBrewedContent: parseFloat((200).toFixed(2)),
		requiredGrounds: parseFloat((12).toFixed(2))
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
			return parseFloat((this.requiredGrounds*10).toFixed(2));
		},
		bpTime: function () {
			return parseFloat((this.totalBrewTime*(1/4)).toFixed(2));
		},
		mpTime: function(){
			return parseFloat((this.totalBrewTime*(1/4)).toFixed(2));
		},
		tpTime: function(){
			return parseFloat((this.totalBrewTime*(1/2)).toFixed(2));
		},
		bpWater: function(){
			return parseFloat((this.totalBrewedContent*(1/4)).toFixed(2));
		},
		mpWater: function(){
			return parseFloat((this.totalBrewedContent*(1/4)).toFixed(2));
		},
		tpWater: function(){
  			return parseFloat((this.totalBrewedContent*(1/2)).toFixed(2));
		}
	}
})