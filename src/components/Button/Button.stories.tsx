import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Veno-ui/Button",
    component: Button,
    argTypes: {
        color: {
            name: "Color",
            defaultValue: "primary",
            control: { type: "select" },
            options: ["primary", "secondary"]
        },
        size: {
            name: "Size",
            defaultValue: "default",
            control: { type: "select" },
            options: ["default", "small", "large"],
            danger: {
                name: "Danger",
                defaultValue: false,
                isDanger: { control: "boolean" }
            }
        }
    }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: "primary",
    size: "default",
    children: "Hello World"
};
