module.exports = {
    stories: [
        '../**/*.strories.mdx',
        '../**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/preset-scss',
        '@storybook/addon-essentials',
        '@storybook/preset-a11y',
        '@storybook/addon-notes/register-panel',
    ]
}