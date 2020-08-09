
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['青森県','秋田県','岩手県','山形県','宮城県','福島県','茨城県','群馬県','栃木県','埼玉県','千葉県','東京都','神奈川県','山梨県','長野県','新潟県','富山県','石川県','福井県','静岡県','岐阜県','愛知県','三重県','大阪府','兵庫県','京都府','滋賀県','奈良県','和歌山県','島根県','広島県','鳥取県','岡山県','香川県','愛媛県','徳島県','高知県','山口県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'].map((v)=>v.split("")),
        datasets: [{
            label: 'RGB',
            data: [12, 89, 3,50,44,26,76,78,11,41,22,34,89,5,43,22,67,74,81,1,33,44,5,5,77,62,52,33,75,57,35,3,93,64,6,34,22,74,33,37,82,88,46,99,67,35,11],
            backgroundColor: [
                'rgba(255, 0, 0, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 0, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            
            xAxes: [{
                ticks: {
                maxRotation: 90,
                minRotation: 90,
                autoSkip: false,
                }
            }],
            
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
            
        }
    }
});
