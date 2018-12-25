<template>
	<div id="home">
		<mt-swipe class="carousel" :auto="5000">
	    <mt-swipe-item v-for="(item, index) in list" :key="item.value">
	      <router-link :to="item.httpLink">
	        <img :src="'./static/img'+ index + '.jpg'" width="100%">
	      </router-link>
	    </mt-swipe-item>
	  </mt-swipe>
	  <marquee scrollamount="4" class="marquees">友情提醒： 平台任务每天下午16点大量更新~</marquee>
	  <ul class="icons clearfix">
	    <li class="item" v-for="(item, index) in positions">
	      <router-link :to="item.httpLink">
	        <img :src="'./static/img'+ index + '.jpg'" width="80%">
	        <div class="tit">{{item.title}}</div>
	      </router-link>
	    </li>
	  </ul>
	  <div class="cent">
	  	<ul>
	  		<li class="centLi clearfix" @click="jump(value.url)" v-for="value in centList">
	  			<div class="leftCent fl">
	  				<img class="leftImg" src="../assets/imgs/img1.jpg">
	  			</div>
	  			<div class="middleCent fl">
	  				<div class="tit">支付宝现金红包</div>
	  				<div class="middleCents">
	  					搜索"615860888"立即领取红包(每天都能领取)
	  				</div>
	  				<div class="Nums">635人加入</div>
	  			</div>
	  			<div class="rightCent">
	  				加入
	  			</div>
	  		</li>
	  	</ul>
	  </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	list: [{
    		httpLink: ''
    	}, {
    		httpLink: ''
    	}],
    	positions: [{
    		httpLink: '/list?status=1',
    		title: '苹果赚钱'
    	}, {
    		httpLink: '/list?status=2',
    		title: '安卓赚钱'
    	}, {
    		httpLink: '/list?status=3',
    		title: '新闻赚钱'
    	}, {
    		httpLink: '',
    		title: '淘宝赚钱'
    	}],
    	centList: [{
    		url: ''
    	}]
    }
  },
  methods: {
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
	#home {
		.carousel {
	    margin: 0 !important;
	    img {
	    	width: 100%;
	      min-height: 5rem;
	    }
	  }
	  .marquees {
	  	margin-top: 0.1rem;
	  	color: #FF2D2D;
	  	line-height: 0.48rem;
	  	font-size: 0.24rem;
	  	background-color: #fff;
	  }
	  .icons {
	  	margin: 0 !important;
		  padding-top: 0.2rem;
		  padding-bottom: 0.1rem;
		  list-style: none;
		  background-color: #fff;
		  .item {
		    width: 25%;
		    float: left;
		    .tit {
		      font-size: 0.24rem;
		      line-height: 0.36rem;
		    }
		    .tit.titHeight {
		      height: 0.72rem;
		    }
		  }
		  .item:nth-child(n+5) {
		    margin-top: 0.18rem;
		    margin-bottom: 0;
		  }
		  a {
		    color: #666;
		    width: 100%;
		    display: block;
		    img {
		      width: 60%;
		      margin: 0 auto;
		    }
		  }
		  div.icon {
		    color: #666;
		    width: 100%;
		    display: block;
		    img {
		      width: 60%;
		      margin: 0 auto;
		    }
		  }
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
	  			padding-bottom: 0.28rem;
	  			.tit {
	  				font-size: 0.28rem;
	  				line-height: 0.36rem;
	  				min-height: 0.36rem;
	  				margin-bottom: 0.06rem;
	  				color: #333;
	  			}
	  			.middleCents {
	  				width: 100%;
	  				line-height: 0.32rem;
	  				font-size: 0.24rem;
	  				color: #EEAD0E;
	  			}
	  			.Nums {
	  				position: absolute;
	  				bottom: 0;
	  				left: 0;
	  				color: #FF2D2D;
	  				font-size: 0.20rem;
	  				line-height: 0.20rem;
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
