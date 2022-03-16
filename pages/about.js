import Link from "next/link";

const About = () => (
    <>
        <section>
            <script></script>
            <div className = "content py-20">
                <h2 className="dark:text-white">About Us</h2>
                <span className="dark:text-white"></span>
                <p className="dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                <ul className = "links">
                    <li className="dark:border-white">
                    <Link href="/resiliency">
                        <a className="dark:text-white">resiliency</a>
                    </Link>
                    </li>
                    <div className = "vertical-line dark:text-white dark:bg-white"></div>
                    <li className="dark:border-white">
                        <Link href="/chaos">
                            <a className="dark:text-white">chaos engineering</a>
                        </Link>
                    </li>
                    <div className="vertical-line dark:text-white dark:bg-white"></div>
                    <li className="dark:border-white">
                        <Link href="/fmea">
                            <a className="dark:text-white">Failure Mode & Effects Analysis</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>

        <style>{`
            section{
                display: grid;
                border-radius: 12px
            }
            .content{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                color: #0F0F0F;
            }
            .content h2{
                text-transform: uppercase;
                font-size: 36px;
                letter-spacing: 6px;
                opacity: 0.9;
            }
            .content span{
                height: 0.5px;
                width: 80px;
                background: #777;
                margin: 30px 0;
            }
            .content p{
                padding-bottom: 15px;
                font-weight: 300;
                opacity: 0.7;
                width: 60%;
                text-align: center;
                margin: 0 auto;
                line-height: 1.7;
                color: #0F0F0F; 
            }
            .links li{
                border: 2px solid #0F0F0F;
                list-style: none;
                border-radius: 5px;
                padding: 10px 15px;
                width: 160px;
                text-align: center;
            }
            .links li a{
                text-transform: uppercase;
                color: #0F0F0F;
                text-decoration: none;
            }
            .links li:hover{
                border-color: #bcbcbc;
            }
            .vertical-line{
                height: 30px;
                width: 3px;
                background: #0F0F0F;
                margin: 0 auto;
            }
            @media(max-width: 900px){
                section{
                grid-template-columns: 1fr;
                width: 100%;

                border-radius: none;
            }
            `}
        </style>

    </>
);

export default About;