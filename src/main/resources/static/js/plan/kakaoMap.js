var container = document.getElementById('map'); //������ ���� ������ DOM ���۷���
var options = { //������ ������ �� �ʿ��� �⺻ �ɼ�
    center: new kakao.maps.LatLng(33.450701, 126.570667), //������ �߽���ǥ.
    level: 3 //������ ����(Ȯ��, ��� ����)
};
var map = new kakao.maps.Map(container, options);