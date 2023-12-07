import classes from "./Home.module.css"
import { Link } from "react-router-dom"

export default function Home() {
    return(
        <section className={classes["last-offer"]} id="lastOffer">
            <h1 className={classes.heading}>LAST OFFERS</h1>
            <div className={classes.slider} >
                <div className={classes.wrapper}>
                    <div className={classes.box}>
                        <img className={classes.img} src="/images/img1.png" alt="" />
                        <h3>BMW 7 Series</h3>                      
                        <div className={classes.price}>$65,000</div>
                        <Link to="#" className={classes.btn}>Details</Link>
                    </div>

                    <div className={classes.box}>
                        <img className={classes.img} src="/images/img2.png" alt="" />
                        <h3>Vauxhall Mokka X</h3>                        
                        <div className={classes.price}>$25,500</div>
                        <Link to="#" className={classes.btn}>Details</Link>
                    </div>

                    <div className={classes.box}>
                        <img className={classes.img}src="/images/img4.png" alt="" />
                        <h3>AUDI Q3</h3>            
                        <div className={classes.price}>$55,000</div>
                        <Link to="#" className={classes.btn}>Details</Link>
                    </div>

                    <div className={classes.box}>
                        <img className={classes.img} src="/images/img3.png" alt="" />
                        <h3>Mercedes-Benz CLA</h3>
                        <div className={classes.price}>$45,700</div>
                        <Link to="#" className={classes.btn}>Details</Link>
                    </div>
                </div>
                <div className={classes["swiper-pagination"]}></div>
            </div>

           
        </section>
    )
}