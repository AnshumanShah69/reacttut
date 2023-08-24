import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({///here we are making state variables to make it interative
    //     color:"black",
    //     backgroundColor:"white"
    // })
    let myStyle={
        color:props.mode==='dark'?'white':'rgb(17 0 117)',
        backgroundColor:props.mode==='dark'?'rgb(17 0 117)':'white'
    }

    
    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3' style={{color:props.mode==='dark'?'white':'rgb(17 0 117)'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo necessitatibus praesentium. Tempore repellat quaerat optio quidem ducimus omnis quos!</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero aspernatur id animi tempore officia fugiat atque, modi odit nisi.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis aperiam? Deleniti molestias, asperiores nobis sit cum a iusto voluptatibus.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
