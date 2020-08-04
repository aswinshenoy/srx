module.exports = {
    stories: [
        '../src/**/**/stories/*.stories.@(ts|js|mdx)',
    ],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-docs',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
    ]
};