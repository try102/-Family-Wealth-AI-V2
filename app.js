// Family Wealth AI Agent V3.0

// Application Controller

// 添加新资产

function addNewAsset(){

    let asset = {

        name:

        document.getElementById("assetName").value,

        category:

        document.getElementById("assetCategory").value,

        type:

        document.getElementById("assetType").value,

        country:

        document.getElementById("assetCountry").value,

        currency:

        document.getElementById("assetCurrency").value,

        institution:

        document.getElementById("assetInstitution").value,

        amount:

        Number(

            document.getElementById("assetAmount").value

        )

    };

    if(!asset.name || !asset.amount){

        alert(

            "请输入资产名称和金额"

        );

        return;

    }

    addAsset(asset);

    document.querySelectorAll(

        ".asset-form input"

    )

    .forEach(

        input=>{

            input.value="";

        }

    );

}

// 更新财富总览

function updateDashboard(){

    let total =

    calculateTotalAssets();

    let box =

    document.getElementById(

        "totalAssets"

    );

    if(box){

        box.innerHTML =

        "¥" +

        total.toLocaleString(

            "zh-CN"

        );

    }

}

// 页面启动

window.addEventListener(

"load",

()=>{

    updateAssetDisplay();

    updateDashboard();

    if(

    typeof updatePortfolioDisplay

    === "function"

    ){

        updatePortfolioDisplay();

    }

});
