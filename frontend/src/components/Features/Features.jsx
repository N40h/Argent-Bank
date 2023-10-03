import React from "react";
import ChatIcon from "../../assets/icon-chat.png"
import MoneyIcon from "../../assets/icon-money.png"
import SecurityIcon from "../../assets/icon-security.png"
import FeatureItem from "../FeatureItem/FeatureItem";

export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
                src={ChatIcon}
                alt="Chat Icon"
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
                src={MoneyIcon}
                alt="Money Icon"
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
                src={SecurityIcon}
                alt="Security Icon"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money
                is always safe."
            />
        </section>
    )
}