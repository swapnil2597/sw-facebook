import React from 'react'
import "./Widgets.css"

const widgetSrcURLs = [
    "halir"
];

function Widgets() {
    return (
        <div className="widgets">
            {/* <div className="widgets__title">
                <h2>Monetary Adds</h2>
            </div> */}
            <div className="widget__imageFrame">
                <div>
                    <h2>Advertisement</h2>
                    <h3>Box</h3>
                </div>
            </div>
            <div className="widget__imageFrame">
                <div>
                    <h2>Advertisement</h2>
                    <h3>Box</h3>
                </div>
            </div>
        </div>
    )
}

export default Widgets
