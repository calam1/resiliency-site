const Fmea = () => (
    <>
        <section>
            <div className = "content py-20">
                <h2>FMEA</h2>
                <span></span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
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
                color: #323232;
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
                color: #323232; 
            }
            .links{
                margin: 15px 0;
            }
            .links li{
                border: 2px solid #323232;
                list-style: none;
                border-radius: 5px;
                padding: 10px 15px;
                width: 160px;
                text-align: center;
            }
            .links li a{
                text-transform: uppercase;
                color: #323232;
                text-decoration: none;
            }
            .links li:hover{
                border-color: #bcbcbc;
            }

            .vertical-line{
                height: 30px;
                width: 3px;
                background: #323232;
                margin: 0 auto;
            }

            @media(max-width: 900px){
                section{
                grid-template-columns: 1fr;
                width: 100%;
                
                border-radius: none;
            }
                .image{
                height: 100vh;
                border-radius: none;
            }
                .content{
                height: 100vh;
                border-radius: none;
            }
                .content h2{
                font-size: 20px;
                margin-top: 50px;
            }
                .content span{
                margin: 20px 0;
            }
                .content p{
                font-size: 14px;
            }
                .links li a{
                font-size: 14px;
            }
                .links{
                margin: 5px 0;
            }
                .links li{
                padding: 6px 10px;
            }
                .icons li i{
                font-size: 15px;
            }
            }
            `}
        </style>

    </>
);

export default Fmea;