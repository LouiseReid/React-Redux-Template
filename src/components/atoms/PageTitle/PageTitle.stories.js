import React from "react";

import PageTitleComponent from "./PageTitle";

export default {
  title: "atoms/PageTitle",
  component: PageTitleComponent,
};

const Template = (args) => <PageTitleComponent {...args} />;

export const PageTitle = Template.bind({});
PageTitle.args = {
  children: "Hello",
};
