import { withBase } from 'vitepress';
import { useData } from '../composables/data';
import { isExternal } from '../../shared';
export function throttleAndDebounce(fn, delay) {
    let timeoutId;
    let called = false;
    return () => {
        if (timeoutId)
            clearTimeout(timeoutId);
        if (!called) {
            fn();
            (called = true) && setTimeout(() => (called = false), delay);
        }
        else
            timeoutId = setTimeout(fn, delay);
    };
}
export function ensureStartingSlash(path) {
    return /^\//.test(path) ? path : `/${path}`;
}
export function normalizeLink(url) {
    if (isExternal(url))
        return url;
    const { site } = useData();
    const { pathname, search, hash } = new URL(url, 'http://a.com');
    const normalizedPath = pathname.endsWith('/') || pathname.endsWith('.html')
        ? url
        : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? '' : '.html')}${search}${hash}`);
    return withBase(normalizedPath);
}
