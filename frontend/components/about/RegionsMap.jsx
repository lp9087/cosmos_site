import { useCallback, useEffect, useRef, useState } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import bbox from '@turf/bbox';

import BASE_MAP_STYLE from '@/lib/mapbox/map-style-basic-v8.json';

const RegionsMap = () => {
  const mapRef = useRef();
  const [geoData, setGeoData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {
    fetch('/rf_subjects.geojson')
      .then((resp) => resp.json())
      .then((json) => setGeoData(json))
      .catch((err) => console.error('Could not load data', err));
  }, []);

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];
    // debugger;

    setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y });
  }, []);

  useEffect(() => {
    if (!geoData) return;
    const [minLng, minLat, maxLng, maxLat] = bbox(geoData);

    console.log(minLng, minLat, maxLng, maxLat);
    // if (feature) {
    //   // calculate the bounding box of the feature
    //   const [minLng, minLat, maxLng, maxLat] = bbox(feature);

    //   mapRef.current.fitBounds(
    //     [
    //       [-180, 41.188865661621094],
    //       [180.00000000000034, 81.85732269287121],
    //     ],
    //     { padding: 40, duration: 1000 }
    //   );
    // }
  }, [geoData]);

  return (
    <div className="h-[600px]">
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          bounds: [
            [-180, 41.188865661621094],
            [180.00000000000034, 81.85732269287121],
          ],
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        interactiveLayerIds={['data']}
        onMouseMove={onHover}
      >
        <Source type="geojson" data={geoData}>
          <Layer
            id="data"
            type="fill"
            paint={{ 'fill-color': '#3288bd', 'fill-opacity': 0.8 }}
          />
        </Source>
        {hoverInfo && (
          <div
            className="absolute bg-white ml-2 h-16 w-48 pointer-events-none"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <span>
              {hoverInfo.feature.properties.TYPE_1}{' '}
              {hoverInfo.feature.properties.VARNAME_1.split('|')[0]}
            </span>
          </div>
        )}
      </ReactMapGL>
    </div>
  );
};

export default RegionsMap;

const sfNeighborhoods = {
  type: 'geojson',
  data: 'https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json',
};

const fillLayer = {
  id: 'sf-neighborhoods-fill',
  source: 'sf-neighborhoods',
  type: 'fill',
  paint: {
    'fill-outline-color': '#0040c8',
    'fill-color': '#fff',
    'fill-opacity': 0,
  },
};

const lineLayer = {
  id: 'sf-neighborhoods-outline',
  source: 'sf-neighborhoods',
  type: 'line',
  paint: {
    'line-width': 2,
    'line-color': '#0080ef',
  },
};

// Make a copy of the map style
const MAP_STYLE = {
  ...BASE_MAP_STYLE,
  sources: {
    ...BASE_MAP_STYLE.sources,
    ['sf-neighborhoods']: sfNeighborhoods,
  },
  layers: [...BASE_MAP_STYLE.layers, fillLayer, lineLayer],
};
