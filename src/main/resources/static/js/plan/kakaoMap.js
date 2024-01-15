var mapContainer = document.getElementById('map'), // ������ ǥ���� div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // ������ �߽���ǥ
        level: 3 // ������ Ȯ�� ����
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // ������ �����մϴ�

// �Ϲ� ������ ��ī�̺�� ���� Ÿ���� ��ȯ�� �� �ִ� ����Ÿ�� ��Ʈ���� �����մϴ�
var mapTypeControl = new kakao.maps.MapTypeControl();

// ���� Ÿ�� ��Ʈ���� ������ ǥ���մϴ�
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

function getInfo() {
    // ������ ���� �߽���ǥ�� ���ɴϴ� 
    var center = map.getCenter(); 
    
    // ������ ���� ������ ���ɴϴ�
    var level = map.getLevel();
    
    // ����Ÿ���� ���ɴϴ�
    var mapTypeId = map.getMapTypeId(); 
    
    // ������ ���� ������ ���ɴϴ� 
    var bounds = map.getBounds();
    
    // ������ ������ ��ǥ�� ���ɴϴ� 
    var swLatLng = bounds.getSouthWest(); 
    
    // ������ �ϵ��� ��ǥ�� ���ɴϴ� 
    var neLatLng = bounds.getNorthEast(); 
    
    // ���������� ���ڿ��� ���ɴϴ�. ((��,��), (��,��)) �����Դϴ�
    var boundsStr = bounds.toString();
    
    
    var message = '���� �߽���ǥ�� ���� ' + center.getLat() + ', <br>';
    message += '�浵 ' + center.getLng() + ' �̰� <br>';
    message += '���� ������ ' + level + ' �Դϴ� <br> <br>';
    message += '���� Ÿ���� ' + mapTypeId + ' �̰� <br> ';
    message += '������ ������ ��ǥ�� ' + swLatLng.getLat() + ', ' + swLatLng.getLng() + ' �̰� <br>';
    message += '�ϵ��� ��ǥ�� ' + neLatLng.getLat() + ', ' + neLatLng.getLng() + ' �Դϴ�';
    
    // �����ڵ����� ���� ���� message ������ Ȯ���� ������.
    // ex) console.log(message);
}