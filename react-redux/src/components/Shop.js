import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {

    const amount = useSelector(state => state.amount);

    const dispatch = useDispatch();

    const actions = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "600px" }}>
            <h2>Deposit/Withdraw Money</h2>
            <div>
                {/* <button className="btn btn-primary" onClick={() => dispatch(actionCreators.withdrawMoney(100))}>-</button>
                Add to cart
                <button className="btn btn-primary" onClick={() => dispatch(actionCreators.depositMoney(100))}>+</button> */}
                <button className="btn btn-primary" onClick={() => actions.withdrawMoney(100)}>-</button>
                Update balance {amount}
                <button className="btn btn-primary" onClick={() => actions.depositMoney(100)}>+</button>
            </div>
        </div>
    )
}

export default Shop
