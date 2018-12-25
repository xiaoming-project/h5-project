<template>
	<div id="lists">
		<mt-swipe class="carousel" :auto="5000">
	    <mt-swipe-item v-for="(item, index) in list" :key="item.value">
	      <router-link :to="item.httpLink">
	        <img :src="'./static/img'+ index + '.jpg'" width="100%">
	      </router-link>
	    </mt-swipe-item>
	  </mt-swipe>
	  <marquee scrollamount="4" class="marquees">友情提醒： 平台任务每天下午16点大量更新~</marquee>
	  <div class="cent">
	  	<ul>
	  		<li class="centLi clearfix" v-for="value in listsData">
	  			<div class="leftCent fl">
	  				<img class="leftImg" :src="value.img">
	  			</div>
	  			<div class="middleCent fl">
	  				<div class="tit">安卓平台1【提现秒到】</div>
	  				<div class="middleCents">
	  					★任务多，单价高
	  				</div>
	  			</div>
	  			<div class="rightCent" @click="jump(value.url)">
	  				加入
	  			</div>
	  		</li>
	  	</ul>
	  </div>
	</div>
</template>

<script>
import { getData } from '@/service'
export default {
  data () {
    return {
    	list: [{
    		httpLink: ''
    	}, {
    		httpLink: ''
    	}],
    	listsData: []
    }
  },
  created () {
		this.init();
  },
  methods: {
  	init () {
			getData({}, res => {
				this.listsData = res.links;
			});
  	},
  	jump (url) {
  		if (url) {
  			location.href = url;
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	#lists {
	  .marquees {
	  	margin-top: 0.1rem;
	  	color: #FF2D2D;
	  	line-height: 0.48rem;
	  	font-size: 0.24rem;
	  	background-color: #fff;
	  }
	  .cent {
	  	margin-top: 0.1rem;
	  	background-color: #fff;
	  	.centLi {
	  		min-height: 1.6rem;
	  		padding: 0.2rem;
	  		border-bottom: 1px solid #ddd;
	  		position: relative;
	  		.leftCent {
	  			width: 1.2rem;
	  			height: 1.2rem;
	  			.leftImg {
	  				width: 100%;
	  				height: 100%;
	  			}
	  		}
	  		.middleCent {
	  			width: 4.2rem;
	  			min-height: 1.2rem;
	  			margin-left: 0.2rem;
	  			text-align: left;
	  			position: relative;
	  			padding-bottom: 0.22rem;
	  			.tit {
	  				font-size: 0.28rem;
	  				line-height: 0.36rem;
	  				min-height: 0.36rem;
	  				color: #333;
	  				margin-bottom: 0.1rem;
	  			}
	  			.middleCents {
	  				width: 100%;
	  				line-height: 0.32rem;
	  				font-size: 0.24rem;
	  				color: #EE7600;
	  			}
	  		}
	  		.rightCent {
	  			width: 1.2rem;
	  			height: 0.5rem;
	  			line-height: 0.5rem;
	  			font-size: 0.28rem;
	  			background-color: #EE7600;
	  			color: #fff;
	  			position: absolute;
	  			right: 0.2rem;
	  			top: 50%;
	  			border-radius: 4px;
	  			transform: translateY(-50%);
	  			-moz-transform: translateY(-50%);
	  			-ms-transform: translateY(-50%);
	  			-o-transform: translateY(-50%);
	  			-webkit-transform: translateY(-50%);
	  		}
	  	}
	  	.centLi:last-child {
	  		border-bottom: 0 none;
	  	}
	  }
	}
</style>
