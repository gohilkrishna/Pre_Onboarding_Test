'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f1a07cf1d3dd7dfd9666920b47358d5c",
"index.html": "993bd66d21b260dcb3b9e8da9be7e89b",
"/": "993bd66d21b260dcb3b9e8da9be7e89b",
"main.dart.js": "23f6caa1385333bb971de9d9a551515e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b4ea0306661e8eae117e194dbb2cb655",
"assets/AssetManifest.json": "88fc5ae4e175d83d853130a924277cf9",
"assets/NOTICES": "ac18bd4ddbd5f3a85bc153334d822a21",
"assets/FontManifest.json": "72b782169d1efdd0e225576e063fb479",
"assets/AssetManifest.bin.json": "8938a8c30179c9de8adf3f03d3d618b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "a16ef9dece2488f79202d57c9030fcfe",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/docDownloadIcon.svg": "e9f4d7a3912547757ec541330be8ced9",
"assets/assets/images/identity_proofs.svg": "bbfa1a5498c3d3da1d641b064d68d27b",
"assets/assets/images/preOfferVerificationIcon.svg": "d3f34c2cbed76a56d7c65cfcd3f9addf",
"assets/assets/images/xmlIcon.svg": "55c9912d627aeab06122fa8daffe3b52",
"assets/assets/images/acknowledgementImage.svg": "8088780693dd1a238c652718b1cf715e",
"assets/assets/images/profileAddIcon.svg": "b94342509f522dbccfc819912e40720d",
"assets/assets/images/information.svg": "03badcb058260a0b0cad60fab5e19697",
"assets/assets/images/departmentIcon.svg": "115987e055a8097db251fafd8727ec11",
"assets/assets/images/cancelIcon.svg": "0ce47ee23f5722cbf2744e373d24565c",
"assets/assets/images/uploadCandidateIcon.svg": "9a58a714f1cbca7fb9ec6642dbf6eca0",
"assets/assets/images/deleteIcon.svg": "9c822f39d3b674f2f15cc72675654359",
"assets/assets/images/offerLetterAcceptanceIcon.svg": "48cb7d0fad4c7cb32776e53f01d424be",
"assets/assets/images/xmlUploadIcon.svg": "1c48267eeaa3794eb6a3a60cb1855c8c",
"assets/assets/images/scanIcon.svg": "12adfc61e4f90cce4cbf33fa307f2df7",
"assets/assets/images/screeningIcon.svg": "f2bde51918197d76ab04377f9429fbec",
"assets/assets/images/family.svg": "c3825611d4cb3c8d655d12ef4626d02a",
"assets/assets/images/preJoiningVerification.svg": "aefcd6630edd5979cd61eb8c4a8dc2ff",
"assets/assets/images/Button%2520Edit.svg": "2fbbd0bfb7eaaed79f9ef610db53ff1b",
"assets/assets/images/coordinates.svg": "3a3a8562c9553b7a55d751e011864e96",
"assets/assets/images/bgImage.png": "aa1927b7500531e34a036ae203b8623f",
"assets/assets/images/oopsImage.svg": "e5e17e1b9b031bbcca55e19a5de2941f",
"assets/assets/images/statisticsIcon.svg": "3b4db957e558d630848febd70dea8b37",
"assets/assets/images/statisticsIcond.svg": "ad05a1ec48c05dd35c804427e3d16c3e",
"assets/assets/images/connectIcon.svg": "9057ed81e6e478fc3338d4ab3d563aa3",
"assets/assets/images/eLearningIcon.svg": "0291ae926065ce2d24c375b6b3c782e2",
"assets/assets/images/appointmentLetterIcon.svg": "53d2189b545f121d853b8a44737112af",
"assets/assets/images/qrVideoImage.svg": "7ee3c69df9f913a1052e1e153ce48808",
"assets/assets/images/rejectIcon.svg": "ff4a14e3f002fad2a9fcc2492f7bc148",
"assets/assets/images/zipIcon.svg": "edfa2f40e5ff5ea03747386fbee873b0",
"assets/assets/images/employer-dashboardimage.png": "33c0b5c94a026536f7b0a0dbe8391b60",
"assets/assets/images/editIcon.svg": "51473931fb28e72adc533a16f1eb92d2",
"assets/assets/images/shareIcon.svg": "7fb75a9e3636c2bf2c5baa393ea5b0d1",
"assets/assets/images/searchIcon.svg": "7c4c14f3701cb3741dce222b07c15813",
"assets/assets/images/companyInfoIcon.svg": "79d8f969d08a5861f35bd9543d6d9100",
"assets/assets/images/dustbin.svg": "8f7bada13281e67454734eb024854e22",
"assets/assets/images/aadhaarIcon.svg": "2998e6607f73455e7d4833da33cbe85b",
"assets/assets/images/offerIcon.svg": "49dbf3b0793f3859bc4ed81344919ed5",
"assets/assets/images/splashBgImg.png": "5414cd5b439505df9cac0f448581f5a1",
"assets/assets/images/aaDhaarEkycIcon.svg": "5f3f7cd6bf6b0a9bff7874cc9e695e29",
"assets/assets/images/mailIcon.svg": "7a1f279beb22b7f19ff2aa1647f5073a",
"assets/assets/images/profile-add.svg": "b94342509f522dbccfc819912e40720d",
"assets/assets/images/sendNotificationIcon.svg": "cd23902b82b37caf91d3f47bbb76b6d1",
"assets/assets/images/pendingIcon.svg": "d4c863415b28f4d75d422e332d22432f",
"assets/assets/images/viewIcon.svg": "33408ca7563bdd738267faff4ebe4abe",
"assets/assets/images/disable_Trash.svg": "cef47cd1d2e2450fc2d02974c6106e8d",
"assets/assets/images/chatIcon.svg": "4f0b3079527d2aa34549073422039d7e",
"assets/assets/images/callIcon.svg": "e754fea76feeff4a232f468618553664",
"assets/assets/images/rejectedIcon.svg": "ff4a14e3f002fad2a9fcc2492f7bc148",
"assets/assets/images/employerBgImage.png": "d41cc5515ed69db6325a66dd87b3cb8b",
"assets/assets/images/dashboardIcon.svg": "04d342162ad75b4bc49baf82664fc4ba",
"assets/assets/images/arrowIcon.svg": "2fbbd0bfb7eaaed79f9ef610db53ff1b",
"assets/assets/images/passportIcon.svg": "d81c01874b7ada1db59a554c1979de28",
"assets/assets/images/postJoiningChecklistIcon.svg": "0cca81c4431c13fe96b1a01816ac041d",
"assets/assets/images/preOfferChecklistIcon.svg": "62e5ff6999731c308cbb228a61978a67",
"assets/assets/images/disable_eye.svg": "640be03561c2d66db448ca5b7ec24156",
"assets/assets/images/falseButtonIcon.svg": "01b7dbc1a1d3d3918f193b77e17b26f4",
"assets/assets/images/approveIcon.svg": "c038ab1beee46399c0ed64c4b25717c1",
"assets/assets/images/postJoiningVerificationIcon.svg": "a8ffb6749391d7b2d4dac3e682691908",
"assets/assets/images/trueIcon.svg": "0c76d1e4ba6d8b5fb10714848f2882ce",
"assets/assets/images/hiredIcon.png": "ee71e1ed02430a74e12586419384fa92",
"assets/assets/images/statusIcon.svg": "5b96543fd15ab04c894a3c05c3203225",
"assets/assets/images/logoutIcon.svg": "226a2523a23ec4fce5b0bf453e50e2f4",
"assets/assets/images/addImageIcon.svg": "ad2050d91265dad9d2ff9b6343b99865",
"assets/assets/images/noNomination.svg": "39de9a072908d60b1ade50264b0962a7",
"assets/assets/images/locationIcon.svg": "db6729fe5243e7cefd0fb245edad105e",
"assets/assets/images/settingIcon.svg": "f8baa8f37c8c9cc87bf8a3c7d919cde3",
"assets/assets/images/logo.png": "01a9a6fded4781e7cebbcfb5e3266944",
"assets/assets/images/uploadedIcon.svg": "62ba93fa0656b356f46595cbc04e14fe",
"assets/assets/images/cardScanIcon.svg": "efe959e0af9155cb0e13b047aa14b232",
"assets/assets/images/addCandidateIcon.svg": "7d759abcdd5e6fac4eecc3782f973c47",
"assets/assets/images/lockIcon.svg": "9854c1c915598ac8547be479e743e48a",
"assets/assets/images/id-card.png": "63b996f88134f9388785dc461f01ca39",
"assets/assets/images/messageIcon.svg": "3833b71fa642d4b083fb54c1f328e7fe",
"assets/assets/images/congratulationsImg.svg": "6ffe10236ef12d104ccea08a56db7cd3",
"assets/assets/images/likeicon.svg": "7d920c6e70362bde5b6130165fc34a65",
"assets/assets/images/addFileIcon.svg": "d2104d23a94689648dd32519b9fcb689",
"assets/assets/images/offerDetailsIcon.svg": "1d9d7e638bd69b517d15dbfa906e65d9",
"assets/assets/images/applicant-id.svg": "7a0e9406094fda916cda3af43c79d622",
"assets/assets/images/manualIcon.svg": "6442af6c7882a8de5a2d752f53f65f6c",
"assets/assets/images/uploadIcon.svg": "ddcb0c4d1d724aa884d80604b76e531e",
"assets/assets/images/preJoiningChecklistIcon.svg": "145243688742efc2be0238c130dbd093",
"assets/assets/images/candidateBgImage.svg": "eea236c7cd1a58b6c824fef8ef7363c8",
"assets/assets/images/kycIcon.svg": "64f88715eefa5d05b564e4c8b405ac7d",
"assets/assets/images/back_button.svg": "6d017de0725c0d1be481c500e9b56984",
"assets/assets/images/myProfileIcon.svg": "698447d12df120ce373180f86d371fd4",
"assets/assets/images/infoIcon.svg": "72a19808cc94dcf25f0ef38be255e4a1",
"assets/assets/images/offerLetterIcon.svg": "1d5abc352fc602cec2209e3d16ad7426",
"assets/assets/images/dangerIcon.svg": "5f5fe48ee9fcced07acb41c204b5c0bd",
"assets/assets/images/candidateBgImage.png": "14934cccb5a64931502b768ec8c55cf1",
"assets/assets/images/salaryFitmentIcon.svg": "b4fba268f60883d1633715216de59d81",
"assets/assets/images/trueButtonIcon.svg": "ec8ec2dfcebb9870fc26ec7cfb27e808",
"assets/assets/images/shortlistedIcon.svg": "a9e9883a0dc11d2e3d0864cc59cf9da3",
"assets/assets/images/verifiedIcon.svg": "95bbb49da057ca12e34629dc93a7656e",
"assets/assets/images/likeIcon.png": "65c76cda0eca5ee6fb2d04e6228419fc",
"assets/assets/images/zingHrLogo.png": "27ffc11c260400c346182867da9dedb7",
"assets/assets/images/verificationImage.svg": "2d0037044d3d4c44d018ec2368ea1791",
"assets/assets/images/addIcon.svg": "2f339ca7e23889761b6fc0ca2076bbc3",
"assets/assets/images/file_picker.svg": "ddcb0c4d1d724aa884d80604b76e531e",
"assets/assets/images/calendar.svg": "9fafaab6387070b3d60cb9af1d3055cd",
"assets/assets/images/joiningConfirmationIcon.svg": "12a0584661d17079d234d436f065e724",
"assets/assets/images/selfieIcon.svg": "acbe8f42dd5f029ee5f9453365feb659",
"assets/assets/images/upload.svg": "389a5889e67053b7d696a22db9a28917",
"assets/assets/images/editPerson.svg": "04b819adab9ec2d1180c8034beec1af9",
"assets/assets/images/qualification.svg": "18f07d3cb43a88efd528959356ba385b",
"assets/assets/images/hiredIcon.svg": "e9dc61582fe2cc8a428a3f63b9c609a3",
"assets/assets/images/interviewsIcon.svg": "0cd0f5a33b639ca799b127f77ee02cb5",
"assets/assets/images/new-add-candidate.png": "2c5c0fb722d7cb33caee34aa764ab47f",
"assets/assets/images/candidateUploadIcon.svg": "294ac36ecd77e974b9a1049417f3ffc6",
"assets/assets/images/history.svg": "29b31e173d46544427408a6d359f41e2",
"assets/assets/images/downloadIcon.svg": "d42b452894abd8dfd869e2b324fd048d",
"assets/assets/images/noteIcon.svg": "6a122ae896699d21343bf3ce525bcc60",
"assets/assets/images/voterIcon.svg": "142b3daeeba0635d1538b9ef9f056f24",
"assets/assets/images/documentsIcon.svg": "fe69ed1e259f84139ef34ec45c2b3cd8",
"assets/assets/images/compensationIcon.svg": "bc5eee5a700bd5df7fbd4b7452cfa710",
"assets/assets/images/panCardIcon.svg": "d24a6689dff5a88ff87396f569f0000a",
"assets/assets/fonts/Cera%2520Pro%2520Light.otf": "112299d7917b38aff426d451d495f3d7",
"assets/assets/fonts/Cera%2520Pro%2520Bold.otf": "07ac815392d30140366e0a9df7f769e8",
"assets/assets/fonts/Cera%2520Pro%2520Medium.otf": "afe6902a46c9d424e9aca916f97562db",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "ddbbc645fa24f351cee22798670fa292",
"canvaskit/canvaskit.js.symbols": "f4ad084190a9b973a7d6a6c24dfe70f2",
"canvaskit/skwasm.wasm": "22ddda77fde9820164b22d160ed991d6",
"canvaskit/chromium/canvaskit.js.symbols": "d6ef624e9af76e20b65b95ceb2e4d6b1",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "82d3269749db25356b372617f9a09faf",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "d4a43e5f076a0d38ff6ab8b73bf36677",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
