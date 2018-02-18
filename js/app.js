var calculator = new Vue({
	el: '#calculator',
	data: {
		brewRatio: parseFloat((50/3).toFixed(2)),
		totalBrewedContent: Math.round(parseFloat((200).toFixed(2))),
		requiredGrounds: Math.round(parseFloat((12).toFixed(2)))
	},
	methods: {
		updateGrounds: function () {
			this.$options.filters.always_pretty(this.$set('requiredGrounds', this.totalBrewedContent/this.brewRatio))
		},
		updateBrewed: function () {
			this.$options.filters.always_pretty(this.$set('totalBrewedContent', this.requiredGrounds*this.brewRatio))
		},
		updateRatio: function () {
			this.$options.filters.always_pretty(this.$set('totalBrewedContent', this.requiredGrounds*this.brewRatio))
			this.$options.filters.always_pretty(this.$set('requiredGrounds', this.totalBrewedContent/this.brewRatio))
		}
	},
	computed: {
		totalBrewTime: function () {
			return Math.round(parseFloat((this.requiredGrounds*10).toFixed(2)));
		},
		totalBrewTimeMin: function () {
			return parseFloat(Math.floor((this.requiredGrounds/6).toFixed(2)));
		},
		totalBrewTimeSec: function () {
			return ((this.requiredGrounds*10)%60);
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
	},
	filters: {
		two_digits: function (value) {
			if(value.toString().length <= 1)
		    {
		        return "0"+value.toString();
		    }
		    return value.toString();
		},
		always_pretty: function (value) {
			return (Math.round(parseFloat(value) * 4) / 4).toFixed(2);
		}
	}
})