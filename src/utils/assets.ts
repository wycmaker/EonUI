/**
 * 获取资源文件的完整路径
 * 在开发环境返回相对路径，在生产环境返回带 base path 的路径
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.STORYBOOK_BASE_PATH || '/';
  return `${basePath}${path.startsWith('/') ? path.slice(1) : path}`;
};

/**
 * 获取 Logo 路径的便捷函数
 */
export const getLogoPath = (): string => {
  return getAssetPath('Logo.svg');
};
