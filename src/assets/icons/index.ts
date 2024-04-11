const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().map(requireContext)

const req = require.context('./svg', false, /.svg$/)

requireAll(req)

export { } // 默认导出，ts如若不导出，会警告
