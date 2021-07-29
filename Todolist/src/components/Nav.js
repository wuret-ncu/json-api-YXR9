import React from 'react';
import './Nav.css'

function Nav(props){

    const { updateListShow } = props;
    return(
        <div className="nav">
            <button type="button" className="btn" onClick={() => updateListShow("all")} >
                全部
            </button>
            <button type="button"className="btn" onClick={() => updateListShow("done")} >
                已完成
            </button>
            <button type="button"className="btn" onClick={() => updateListShow("todo")} >
                未完成
            </button>
        </div>
    )
}

export default Nav;