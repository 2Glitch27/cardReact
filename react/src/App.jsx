import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Modal from './components/Modal'


function App() {
  const [info, setInfo] = useState(null)
  const products = [
    {id: 1, title:'ноут', price:5000, popular:true, img:'/card/nout.jpg', desc: 'Мощный игровой ноутбук с отличным экраном. Подходит для работы и отдыха.'},
    {id: 2, title:'телефон', price:10000, popular:false, img:'/card/phone.jpg', desc:'Смартфон с отличной камерой и быстрым процессором. Заряда хватает на 67 дня.'},
    {id: 3, title:'планшет', price:7000, popular:false, img:'/card/pl.jpg', desc: 'Тонкий и легкий планшет для рисования и просмотра фильмов. Экран с сочными цветами.'},
    {id: 4, title:'часы', price:2000, popular:false, img:'/card/ch.jpg', desc:'Смарт-часы с датчиком пульса и защитой от воды. Помогают следить за здоровьем.'},
    {id: 5, title:'камера', price:200000, popular:false, img:'/card/kamera.jpg', desc:'Зеркальный фотоаппарат для профессиональных снимков. В комплекте идет базовый объектив.'},
    {id: 6, title:'телевизор', price:15000, popular:false, img:'/card/tv.jpg', desc:'Огромный 4K экран с функцией Smart TV. Кинотеатр прямо у вас дома.'},
    {id: 7, title:'компьютерная мышка', price:50, popular:false, img:'/card/mouse.jpg', desc:'Игровая мышь с настраиваемой подсветкой и высокой точностью сенсора.'},
    {id: 8, title:'joystick', price:50888, popular:false, img:'/card/joystick.jpg', desc:'Беспроводной геймпад для консолей и ПК. Удобно лежит в руках и долго держит заряд.'},
  ]
  return (
    <>
    <div className='max-w-7xl w-full mx-auto'>
      <Header name="Finsweet">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><button className="py-4 px-12 text-black bg-amber-50">Subscribe</button></li>
      </Header>

      <div className='grid grid-cols-4 justify-items-center p-5 w-full gap-7 px-20' >
        {
          products.map((product)=>(
          <Card key={product.id} title={product.title} price={product.price} img={product.img} onClick={()=> setInfo(product)}/>
          ))
        }
        
      </div>
      {
          info && <Modal key={info.id} title={info.title} price={info.price} img={info.img} desc={info.desc} onClick={()=> setInfo(null)}/>
        }
      <Footer name="Finsweet">
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </Footer>
    </div>
    </>
  )
}

export default App
