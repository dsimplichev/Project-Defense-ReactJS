import classes from "./Footer.module.css"


export default function Footer() {
    return (

        <section className={classes.contact} id="contact">
            <h1 className={classes.heading}>Contact us</h1>
            <div className={classes["contact-container"]}>
                
                <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.3793600475!2d23.24154715156285!3d42.695528788954185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2z0KHQvtGE0LjRjywg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2suk!4v1701655022571!5m2!1sbg!2suk" allowfullscreen="" loading="lazy"></iframe>

                
                
                <form action="">
                    <h3>Get in touch</h3>
                    <input type="text" placeholder="Name" className={classes.box} />
                    <input type="email" placeholder="Email" className={classes.box} />
                    <input type="number" placeholder="Number" className={classes.box} />
                    <textarea placeholder="Message" className={classes.box} cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message" className={classes.btn} />

                </form>
                
            </div>
        </section>
    )
}