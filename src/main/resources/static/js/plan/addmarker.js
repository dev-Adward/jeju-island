
kakao.maps.event.addListener(map, 'click', function(e) {        
    addMarker2(e.latLng);
    

});




// 지도에 표시된 마커 객체를 가지고 있을 배열입니다
var markersList = [];

// 마커 하나를 지도위에 표시합니다 

// 마커를 생성하고 지도위에 표시하는 함수입니다
function addMarker2(position, callback) {
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: position
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
    // 생성된 마커를 배열에 추가합니다
    markersList.push(marker);
    kakao.maps.event.addListener(marker, 'click', function(e) {
        // 마커를 지도에서 제거합니다
        markersList = markersList.filter(v => {
            return v !== marker
        })
        console.log(markersList)
        marker.setMap(null);
    });
}


function setMarkers2(markersList, marker,map) {
    for(let i = 0; i < markersList.length; i++) {
        if (markersList[i] === marker) {
            markersList.splice(i, 1);
        }
        markersList[i].setMap(map)
    }
}
function setDeleteMarkers2(map) {
    for (var i = 0; i < markers.length; i++) {
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers2() {
    setMarkers(map)    
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers2() {
    setMarkers(null);    
}