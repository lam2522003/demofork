import React from "react";
import "./Content1_Item.css";

const Content1_Item = () => {
    return (
        <ul className="Content1_Item_box">
            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">The Most Advanced Management</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">Manage product faster with managing assistance features that search for product and provide management tools for your company.</span>
                </li>
            </ul>

            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">Quick Deployment</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">Intuitive and simple, deployment time is usually under 3 days. The support team will guide and give you free advice.</span>
                </li>
            </ul>

            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">Collaborative and Remote</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">Manage product with your company in real time. Member companies can access from any computers with any operating systems.</span>
                </li>
            </ul>

            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">Warehouse Management</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">Reduce inventory by 3 times. The web shows exactly how much inventory is currently in stock.</span>
                </li>
            </ul>
        </ul>
    );
}

export default Content1_Item;