
import "./App.css"
import logo from "./assets/logo.png"
import search from "./assets/search.png"
import PText from "./companents/PText"
import Nav from "./companents/Nav"
import like from "./assets/like.png"
import account from "./assets/account.png"
import Button from "./companents/Button" 
import brand from "./assets/brands.png"
import brandEnd from "./assets/brandEnd.png"
import img1 from"./assets/img1.png"
import img2 from"./assets/img2.png"
import img3 from"./assets/img3.png"
import img4 from"./assets/img4.png"
import img5 from"./assets/img5.png"
import img6 from"./assets/img6.png"
import image22 from "./assets/image22.png"
import image23 from "./assets/imag23.png"
import image24 from "./assets/imag24.png"
import img31 from"./assets/img31.png"
import img32 from"./assets/img32.png"
import img33 from"./assets/img33.png"
import img34 from"./assets/img34.png"
import img35 from"./assets/img35.png"
import img36 from"./assets/img36.png"
 import icons from "./assets/subscribe__icon.png"
 import visa from "./assets/visa.png"
 import master from "./assets/master.png"
 import phone from "./assets/phone.png"
 import email from "./assets/email.png"
 import i1 from "./assets/facebook.png"

function App() {
  return (
    <div>
     <div className="BG">
      <header className="w-[80%] m-auto py-[2%]">
        <nav className="grid grid-cols-1 lg:grid-cols-[35%,30%,35%] ">
          <ul className="flex space-x-5 place-self-center">
            <Nav name="Контрагентам"/>
            <Nav name="Дизайнерам"/>
            <Nav name="Вакансии"/>
          </ul>
          <img className="place-self-center" src={logo} alt="" />
          <div className=" grid grid-cols-[30%,40%,30%] gap-2 place-items-center">
            <div className="flex space-x-2">
              <img className="w-[28px] h-[28px]" src={search} alt="" />
              <PText name="Поиск"/>
              
            </div>
            <div className=""><PText name="Вход/Регистрация"/></div>
            <div className="flex space-x-3">
              <img className="w-[28px] h-[28px]" src={account} alt="" />
              <img className="w-[28px] h-[28px]" src={like} alt="" />
            </div>
          </div>
        </nav>
      </header>
      <h1 className="font-bold text-[#ffffff] text-5xl grid place-content-center pt-[21%]  ">Долго, дорого, богато!</h1>
      <div className="flex justify-center py-8">
        <Button  hasBorder={true} item="каталог изделий"/>
        </div>
        <hr />
        <div className="lg:flex flex py-2 w-[86%] m-auto space-y-2 flex-wrap justify-center">
          <img src={brandEnd} alt="" />
          <img src={brandEnd} alt="" />
          <img src={brandEnd} alt="" />
          <img src={brandEnd} alt="" />
          <img src={brandEnd} alt="" />
          <img src={brandEnd} alt="" />
        </div>
      
     </div>
<main>
  <section className="py-[5%]">
    <div className="text-center">
    <p >К мероприятиям</p>
    <p className="text-3xl font-semibold">Настоящая красота здесь!</p>
    <div className="lg:flex w-[80%] m-auto flex flex-wrap justify-center items-center space-x-2 py-[5%]">
      <Button item="Свадьба" hasBgColor={true}/>
      <Button item="МУЖУ" hasBoxSh={true}/>
      <Button item="жене" hasBoxSh={true}/>
      <Button item="партнеру" hasBoxSh={true}/>
      <Button item="коллекции" hasBoxSh={true}/>
      <Button item="редкость" hasBoxSh={true}/>
    </div>
    <div className="w-[80%] m-auto grid lg:grid-cols-3 grid-cols-2  gap-5 ">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
</div>
  </section>
  <section className="">
    <div className="bgBlack">
    <div className="w-[80%] m-auto text-center py-[3%]">
    <p className="text-[#ffffff]">К мероприятиям</p>
    <p className="text-[#ffffff] text-3xl font-semibold">Настоящая красота здесь!</p>
    <br /><br />
    <p className="text-[#ffffff]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</p>
    <br />
    <br />
    <Button item="наши салоны" hasBgColorWhite={true}/>
    </div>
    </div>
    </section>
    <section>
    <div className="text-center py-[5%]">
    <p >Полезные статьи</p>
    <p className="text-3xl font-semibold">Лучшие советы по подбору дорогих подарков</p>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2%] w-[80%] m-auto py-[2%]">
    <img src={image22} alt="" />
    <img src={image23} alt="" />
    <img src={image24} alt="" />
</div>
<Button item="читать наш блог" hasBgColor={true}/>
</div>
    </section>
    <section>
    <div className="text-center py-[5%]">
    <p >#ojjo_jewerly</p>
    <p className="text-3xl font-semibold">Мы в социальных сетях</p></div>
      <div className="grid grid-cols-4 gap-0 w-[80%] m-auto">
        <div className="col-start-1 col-end-3"><img src={img31} alt="" /></div>
        <div className=""><img src={img32} alt="" /></div>
        <div className=""><img src={img33} alt="" /></div>
        <div className=""><img src={img34} alt="" /></div>
        <div className=""><img src={img35} alt="" /></div>
        <div className="col-start-3 col-end-5"><img src={img36} alt="" /></div>

      </div>
    </section>
    <section>
    <div className="bgBlack">
    <div className="w-[80%] m-auto text-center py-[3%]">
    <p className="text-[#ffffff]">Полезные советы и персональный предложения</p>
    <p className="text-[#ffffff] text-3xl font-semibold">Эксклюзивная рассылка</p>
    <br /><br />
   <div className="grid lg:grid-cols-2 grid-cols-1 w-[80%] m-auto">
    <div className="grid grid-cols-[20%,80%] place-items-center">
      <img src={icons} alt="" />
      <p className="text-[#ffffff]">Личный менеджер</p>
      <img src={icons} alt="" />
      <p className="text-[#ffffff]">Личный менеджер</p>
      <img src={icons} alt="" />
      <p className="text-[#ffffff]">Личный менеджер</p>
    </div>
    
      <div className="p-4 bg-white  flex gap-3 my-[15%]">
<input placeholder="Ваш e-mail" className="w-[50%] border border-solid border-black" type="text" name="" id="" /> 
<Button item="отправить" hasBgColor={true}/>
      
    </div>
   </div>
   
    </div>
    </div>

    </section>
</main>
<footer>
  <div className="w-[80%] m-auto grid grid-cols-2 lg:grid-cols-4 py-[5%] gap-4">
    <div className="">
      <p className="text-2xl">Полезные ссылки</p>
      <hr /><br />
      <p>Доставка</p>
      <br />
      <p>Оплата </p>
      <br />
      <p>Акции</p>
      <br />
      <p>Политика конфиденциальности</p>
    </div>
    <div className="">
      <p className="text-2xl">оплата</p>
      <hr />
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
      <br />
      <div className="flex gap-2">
        <img src={visa} alt="" />
      <img src={master} alt="" /></div>
      
      
    </div>
    <div className="">
      <p className="text-2xl">контакты</p>
      <hr /><br />
      <div className="grid grid-cols-[20%,80%] place-items-center">
      <img src={phone} alt="" />
      <p >8 (812) 234-56-55 </p>
      <p className="text-white">gvjhb</p><p className="text-white"></p>
      <img src={phone} alt="" />
      <p >8 (812) 234-56-55 </p>
      <p className="text-white">gvjhb</p><p className="text-white"></p>
      <img src={email} alt="" />
      <p >ojjo@ojjo.ru</p>
    </div>
    </div>
    <div className="">
      <p className="text-2xl">социальные сети</p>
      <hr /><br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
      <br />
     <div className="flex"> 
     <img src={i1} alt="" />
     <img src={i1} alt="" />
     <img src={i1} alt="" />
     <img src={i1} alt="" />
     <img src={i1} alt="" />
     </div>
    </div>

  </div>
  <hr />
  <div className="grid grid-cols-4">
    <p>(c) 2020 OJJO jewelry</p>
    <p>Договор публичной офферты</p>
    <p>Контрагентам</p>
    <p>Сделано Figma.info</p>
  </div>
</footer>
    </div>
  );
}

export default App;
