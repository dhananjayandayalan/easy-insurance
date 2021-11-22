import classes from './homepage.module.css'
import Navbar from '../../components/Navbar/Navbar'
import './animation1.css'
import './animation2.css'
import './homepage.css'
import call_icn from './call_icon.png'
import design from './insurance_design1.svg'
const Homepage =()=>{
    return(
        <>
            <div class="area" >
                <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            <div className="context">
                <Navbar></Navbar>
                <div className={classes.homepage}>
                    <div className={classes.left}>
                        <div className={classes.left_top}>
                            <div id="container">
                                    Easy 
                                <div id="flip">
                                    <div><div>Insure Your Motor</div></div>
                                    <div><div>Insure Your Travel</div></div>
                                    <div><div>Insure Your Health</div></div>
                                    
                                </div>
                                    Insurance
                                </div>
                            </div>

                        <div className={classes.left_bottom}>
                            <button className={classes.quote_btn}>
                                <span>Explore More</span>
                            </button>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <img src={design} alt=""/>
                        <div className={classes.animation3_ctn}>
                                
                        </div>
                    </div>
                        <section class="call-buton">
                            <a class="action" href="tel:9999999">
                                <i class="fa fa-phone"></i><img className={classes.call_icn} src={call_icn} alt=""/>
                            </a>
                        </section>
                </div>
            </div>
        </>
    )
}
 export default Homepage;