let diana = "asdasdasdaads4684864as654da8s64d64asd84a6sd"
var res = diana.replace(/\D/g, "")
console.log(res)

var inject= '<a onclick="verMM(' + dianaint + ')" class="btn btn-primary btn-xs" data-toggle="tooltip" title="Visualizar" data-placement="top"><i class="fa fa-search"></i></a><a onclick="derivarMM(' + dianaint + ')" class="btn bg-orange btn-xs" data-toggle="tooltip" title="Derivar Mensaje Militar Recibido" data-placement="top"><i class="fa fa-file-text-o"></i></a>'

e.parentNode.innerHTML = inject;