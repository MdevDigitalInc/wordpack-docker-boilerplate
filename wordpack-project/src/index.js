import 'jquery';
import './style.scss';

import Router from './util/RouteScriptLoader';
import common from './js/common';
import home from './js/home';

// Images
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./img/', true, /\.*$/));

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  /** All pages */
  common,
  /** Home page */
  home,
  /** About Us page, note the change from about-us to aboutUs. */
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
