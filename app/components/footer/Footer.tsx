import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
         <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            
               <FooterList>
                  <h3 className="text-base font-bold mb-3">Shop Categories</h3>               
                  <Link href="#">Phones</Link>
                  <Link href="#">Laptops</Link>
                  <Link href="#">Desktops</Link>
                  <Link href="#">Watches</Link>
                  <Link href="#">TVs</Link>
                  <Link href="#">Accessories</Link>
               </FooterList>

               <FooterList>
                  <h3 className="text-base font-bold mb-3">Customer Service</h3>
                  <Link href="#">Contact Us</Link>
                  <Link href="#">Shipping Policy</Link>
                  <Link href="#">Returns & Exchanges</Link>
                  <Link href="#">Watches</Link>
                  <Link href="#">FAQs</Link>
               </FooterList>
            
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
               <h3 className="text-base font-bold mb-3">Customer Service</h3>
               <p className="mb-2 text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab sapiente minus voluptatibus enim autem, nulla, aliquid soluta obcaecati sunt aliquam ratione accusamus est, quis libero itaque suscipit ducimus non!</p>
               <p>$copy;{new Date().getFullYear()} E~Shop All rights reserved</p>
            </div>
            <FooterList>
               <div>
                  <h3 className="text-base font-bold mb-3 md:text-start text-center">Follow Us</h3>
                     <div className="flex justify-center md:justify-start gap-2 ">
                        <Link href="#" ><FaFacebook size={24}/></Link>
                        <Link href="#" ><AiFillTwitterCircle  size={24}/></Link>
                        <Link href="#" ><RiInstagramFill  size={24}/></Link>
                        <Link href="#" ><FaYoutube  size={24}/></Link>
                     </div>
               </div>

            </FooterList>

         </div>
      </Container>
    </footer>
  );
};

export default Footer;
