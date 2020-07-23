<template>
  <div>
    <el-container>
      <el-header>
        <div class="box">
          <div>Sort by:</div>
          <div>
            <p @click="logout">price</p>
            <span>
              <i class="el-icon-caret-top"></i>
            </span>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div
            :class="{active:index==actived}"
            v-for="(item,index) in goodname"
            in
            :key="index"
            @click="actived=index"
          >
            <p>{{item}}</p>
          </div>
        </el-aside>
        <el-main>
          <div class="bom" v-for="(item,index) in searchGoods" :key="index">
            <div>
              <img :src="'../static/img/'+item.productImage" alt />
            </div>
            <div>
              <p>{{item.productName}}</p>
              <p>￥{{item.salePrice}}</p>
            </div>
            <div>
              <el-button type="success">成功按钮</el-button>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: [],
      goodname: ["all", "0-100", "100-200", "200-500", "500-1000", "1000-5000"],
      actived: 0
    };
  },
  props: {},
  computed: {
        //商品搜索信息
    searchGoods() {
      let goods = this.list;
      //sort排序
      goods.sort((a, b) => {
        if (this.sort == 1) {
          return a.salePrice - b.salePrice;
        } else if (this.sort == 2) {
          return b.salePrice - a.salePrice;
        }
      });

      if (this.activePrice != 0) {
        let price = this.priceAll[this.activePrice];
        let min = price.split("-")[0];
        let max = price.split("-")[1];

        goods = goods.filter(item => {
          return item.salePrice >= min && item.salePrice < max;
        });
      }

      return goods;
    }
  },
  components: {},
  mounted() {
    this.goods();
  },
  methods: {
    //   changeSort() {
    //   if (this.sort == 0 || this.sort == 2) {
    //     this.sort = 1;
    //   } else {
    //     this.sort = 2;
    //   }
    // },
    goods() {
      this.$axios.get("../static/data.json").then(res => {
        // console.log(res);
        this.list = res.data.result.list;
      });
      //   console.log(this.list);
    },
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
} */
.el-header {
  width: 100%;
  background: #ddd;
  height: 50px;
}
.box {
  width: 100%;
  line-height: 10px;
  /* background: #ddd; */
}
.box > div {
  margin-left: 90%;
}
.el-container {
  width: 100%;
  /* background: #ccc; */
  display: flex;
  justify-content: space-between;
}
.el-aside {
  width: 30%;
  /* background: rgb(226, 201, 201); */
}
.el-aside > div > p {
  line-height: 40px;
  /* border-left: 1px solid #ff1200; */
}
.el-main {
  width: 70%;
  /* background: rgb(99, 89, 89); */
  /* border: 1px solid #000; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.el-main > .bom {
  width: 23%;
  border: 1px solid #000;
  padding: 5px;
  margin-top: 5px;
}
img {
  width: 100%;
  height: 200px;
  /* border: 1px solid #000; */
}
.el-button {
  width: 100%;
}
.active {
  background: #ddd;
}
</style>