import { useEffect, useState } from "react";

function Users() {


    const bankOne = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ];
    const bankTwo = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Chord-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        },
        {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Chord-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        },
        {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Chord-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        },
        {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Shaker',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        },
        {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        },
        {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        },
        {
            keyCode: 90,
            keyTrigger: 'Z',
            id: 'Punchy-Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        },
        {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Side-Stick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        },
        {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Snare',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        }
    ];

    const [rangeValue, setRangeValue] = useState(100);

    const [message, setMessage] = useState("");

    //togle bank power butonları
    const [activePower, setActivePower] = useState(false);

    const togglePower = () => {
        activePower ? setActivePower(false) : setActivePower(true);
    }
    const [activeBank, setActiveBank] = useState(false);

    const toggleBank = () => {
        activeBank ? setActiveBank(false) : setActiveBank(true);
    }

    //slider volume
    useEffect(() => {
        console.log(rangeValue)
    }, [rangeValue]);




    return (
        <div className="container">
            <div className="users-page">

                <div className="header">
                    <p>FFC</p>
                    <i className="fa-brands fa-free-code-camp"></i>
                </div>

                <div className="footer">
                    <div className="musicButtonContainer ">
                        {
                            activeBank ?
                                bankOne.map((el) => {
                                    return (<button className="musicButton btn" onMouseDown={() => {
                                        if (activePower) {

                                            setMessage(el.id);
                                            let audio = new Audio(el.url);
                                            audio.play();
                                        }
                                    }}>{el.keyTrigger}</button>)
                                })
                                :
                                bankTwo.map((el) => {
                                    return (<button className="musicButton btn" onMouseDown={() => {
                                        if (activePower) {
                                            setMessage(el.id);
                                            let audio = new Audio(el.url);
                                            audio.play();
                                        }
                                    }}>{el.keyTrigger}</button>)
                                })


                        }
                        {/* {bankOne.map(el => (
                            <button className="musicButton btn" onMouseDown={() => { setMessage(el.id) }} >{el.keyTrigger}</button>
                        ))} */}
                    </div>
                    <div className="footer-right">

                        <div className="control"  >
                            <h6>Power</h6>
                            <div className="select" onClick={togglePower}>

                                <div className="inner"
                                    style={activePower ? { float: "left" } : { float: "right" }}>

                                </div>


                            </div>

                        </div>


                        <p className="message">
                            {message}
                        </p>
                        <div className="volume-slider">
                            <input type="range" step="1" min="0" max="100" value={rangeValue} onChange={(e) => {
                                setRangeValue(e.target.value);
                                setMessage("Volume : " + e.target.value)
                            }} onMouseUp={() => { setMessage("") }} />
                        </div>
                        <div className="control">
                            <h6>Bank</h6>
                            <div className="select" onClick={toggleBank}>
                                <div className="inner"
                                    style={activeBank ? { float: "left" } : { float: "right" }}
                                ></div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}
export default Users;