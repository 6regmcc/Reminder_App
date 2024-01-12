import type { StorybookConfig } from "@storybook/react-vite";

const config: { features: { emotionAlias: boolean }; stories: string[]; framework: { name: string; options: {} }; docs: { autodocs: string }; addons: string[] } = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    emotionAlias: false,
  },
};
export default config;
