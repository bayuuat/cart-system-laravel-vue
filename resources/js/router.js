import StoreComponent from './components/StoreComponent.vue'
import CartComponent from './components/CartComponent.vue'

const routes = [
  {
    path:"/",
    name: "",
    component: StoreComponent,
  },
  {
    path:"/cart",
    name: "cart",
    component: CartComponent,
  }
]

export default routes