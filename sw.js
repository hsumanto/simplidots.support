/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';

// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/main.css',
  '/scripts/app.js',
  '/scripts/install.js',
  '/scripts/luxon-1.11.4.js',
  '/images/simplidots_support_flat.png',
  '/images/retail/search.png',
  '/images/simplidots_retail_flat.png',
  '/images/retail/install.png',
  '/images/retail/login_120.png',
  '/images/retail/register_120.png',
  '/images/retail/scan_qr_code.jpg',
  '/images/retail/scan_qr_code_confirm.jpg',
  '/images/retail/scan_qr_code_success_120.png',
  '/images/retail/order_120.png',
  '/images/retail/quantity_120.png',
  '/images/retail/added_120.png',
  '/images/retail/create-order_120.png',
  '/images/retail/create-order-success_120.png',
  '/images/retail/delete_item_in_cart_120.png',
  '/images/retail/delete_item_in_cart_confirm_120.png',
  '/images/retail/order-history_120.png',
  '/images/retail/order-history-all_120.png',
  '/images/retail/order-history-filter_120.png',
  '/images/retail/order-history-search_120.png',
  '/images/retail/order-history-detail_120.png',
  '/images/retail/payment-history_120.png',
  '/images/retail/payment-history-all_120.png',
  '/images/retail/payment-history_filter_120.png',
  '/images/retail/payment-history_search_120.png',
  '/images/retail/payment-history_search_by_payment_method_120.png',
  '/images/retail/payment_history_detail_120.png',
  '/images/retail/promo_120.png',
  '/images/retail/waiting_for_delivery_120.png',
  '/images/retail/order-on-delivery_120.png',
  '/images/retail/order-delivered_120.png',
  '/images/retail/payment_completed_120.png',
  '/images/retail/payment_active_120.png',
  '/images/retail/payment_cancelled_120.png',
  '/images/retail/localization_120.png',
  '/images/monitoring/Carainstall.jpg',
  '/images/monitoring/simplidots monotoring_logo.png',
  '/images/monitoring/CaraInstall1.jpg',
  '/images/monitoring/login.jpg',
  '/images/monitoring/CardList.jpg',
  '/images/monitoring/Table1.png',
  '/images/monitoring/TableList.jpg',
  '/images/monitoring/Card1.png',
  '/images/monitoring/DetailSalesman.jpg',
  '/images/monitoring/DashBoard.jpg',
  '/images/monitoring/Marker.png',
  '/images/monitoring/Marker1.png',
  '/images/monitoring/Tracking.jpg',
  '/images/monitoring/More.jpg',
  '/images/monitoring/StockList.jpg',
  '/images/monitoring/CustDebt.jpg',
  '/images/monitoring/FeedBack.png',
  '/images/monitoring/FeedBack.jpg',
  '/images/monitoring/LogOut.png',
  '/images/retail/simplidots_sfa_flat.png',
  '/images/login-mobilev2.png',
  '/images/create-order-mobile-v2.jpg',
  '/images/add-item.png',
  '/images/input-quantity.png',
  '/images/pilih-satuan.png',
  '/images/checkin-mobilev2.jpg',
  '/images/take-camera-v2.jpg',
  '/images/profile-customer-menu.jpg',
  '/images/customer-profile.pn',
  '/images/product-list-mobile-v2.png',
  '/images/list-promo.png',
  '/images/list-order.png',
  '/images/menu-geotag.png',
  '/images/menentukan-posisi.png',
  '/images/save-geotag.jpg',
  '/images/melihat-list-lokasi.jpg',
  '/images/home-to-profile.jpg',
  '/images/sync-mobile-v2.jpg',
  '/images/sync-masterdata-mobile.jpg',
  '/images/clear-data.jpg',
  '/images/logout-mobile.jpg',
  '/images/retail/simplidots_dms_flat.png',
  '/images/impproductfile.png',
  '/images/attachproductfile.png',
  '/images/pengertian_channel.jpg',
  '/images/pengertian_distrik.jpg',
  '/images/pengertian_paymentterm.jpg',
  '/images/pengertian_pricelist.jpg',
  '/images/pengertian_istaxable.jpg',
  '/images/pengertian_active.jpg',
  '/images/pengertian_blacklist.jpg',
  '/images/pengertian_delete.jpg',
  '/images/pengertian_salesmancode.jpg',
  '/images/retail/simplidots_dms_flat.png',
  '/images/MD_produkmaster.jpg',
  '/images/MD_tamppromaster1.png',
  '/images/MD_promaster_new1.png',
  '/images/MD_promaster_new2.png',
  '/images/simpan.png',
  '/images/MD-promaster_edit.png',
  '/images/MD-promaster_edit1.png',
  '/images/MD-promaster_edit2.png',
  '/images/MD-promaster_delete.png',
  '/images/MD-promaster_delete1.png',
  '/images/MD-promaster_delete2.png',
  '/images/MD_procategory.jpg',
  '/images/MD_procategory_data.jpg',
  '/images/tambah.png',
  '/images/MD_procategory_new.png',
  '/images/simpan.png',
  '/images/MD_procategory_edit1.jpg',
  '/images/MD_procategory_edit2.jpg',
  '/images/MD_pricelist.png',
  '/images/MD_pricelist_data.png',
  '/images/tambah.png',
  '/images/MD_pricelist_new.png',
  '/images/MD_pricelist_edit.png',
  '/images/MD_pricelist_edit1.png',
  '/images/MD-brand.png',
  '/images/MD-brand_data.png',
  '/images/tambah.png',
  '/images/MD-brand_new.png',
  '/images/MD-brand_edit1.png',
  '/images/MD-brand_edit2.png',
  '/images/MD-customermaster.png',
  '/images/MD-customermaster-view.png',
  '/images/tambah.png',
  '/images/MD-customermaster-new1.png',
  '/images/MD-customermaster-new2.png',
  '/images/MD-customermaster-new3.png',
  '/images/MD-customermaster-edit1.png',
  '/images/MD-customermaster-edit2.png',
  '/images/MD-customermaster-edit3.png',
  '/images/customergroup.png',
  '/images/customergroup_view.png',
  '/images/tambah.png',
  '/images/customergroup_new.png',
  '/images/customergroup_edit1.png',
  '/images/customergroup_edit2.png',
  '/images/channel.png',
  '/images/channel_view.png',
  '/images/channel_new.png',
  '/images/channel_edit1.png',
  '/images/channel_edit2.png',
  '/images/division.png',
  '/images/division_view.png',
  '/images/division_new.png',
  '/images/division_edit1.png',
  '/images/supplier.png',
  '/images/supplier_view.png',
  '/images/supplier_new.png',
  '/images/supplier_edit1.png',
  '/images/supplier_edit2.png',
  '/images/employeemaster.png',
  '/images/employeemaster_view.png',
  '/images/employeemaster_new1.png',
  '/images/employeemaster_new2.png',
  '/images/employeemaster_edit1.png',
  '/images/employeemaster_edit2.png',
  '/images/employeemaster_edit3.png',
  '/images/position.png',
  '/images/position_view.png',
  '/images/position_new.png',
  '/images/position_edit1.png',
  '/images/fleet.png',
  '/images/fleet_new.png',
  '/images/fleet_edit1.png',
  '/images/fleet_edit2.png',
  '/images/retail/simplidots_dms_flat.png',
  
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // CODELAB: Add fetch event handler here.
  // CODELAB: Add fetch event handler here.
  if (evt.request.url.includes('/forecast/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
        caches.open(DATA_CACHE_NAME).then((cache) => {
          return fetch(evt.request)
              .then((response) => {
                // If the response was good, clone it and store it in the cache.
                if (response.status === 200) {
                  cache.put(evt.request.url, response.clone());
                }
                return response;
              }).catch((err) => {
                // Network request failed, try to get it from the cache.
                return cache.match(evt.request);
              });
        }));
    return;
  }
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              return response || fetch(evt.request);
            });
      })
  );
});