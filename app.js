alert("111");
// Family Wealth AI Agent V2.3

// Application Controller

// 添加资产

function addNewAsset(){
alert("按钮运行了");
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

        account:

        document.getElementById("assetAccount").value,

        amount:

        Number(

            document.getElementById("assetAmount").value

        )

    };

    if(!asset.name || !asset.amount){

        alert("请输入资产名称和金额");

        return;

    }

    addAsset(asset);

    document.querySelectorAll(

        ".asset-form input"

    )

    .forEach(

        input => input.value=""

    );

}

// 更新财富总览

function updateDashboard(){

    let total =

    calculateTotalAssets();

    let totalBox =

    document.getElementById("totalAssets");

    if(totalBox){

        totalBox.innerHTML =

        "¥" + total.toLocaleString();

    }

}

// 页面启动

window.onload=function(){

    updateAssetDisplay();

    updateDashboard();

    if(typeof updatePortfolioDisplay === "function"){

        updatePortfolioDisplay();

    }

};

        <br>

        国家：

        ${item.country || "未填写"}

        <br>

        币种：

        ${item.currency || "未填写"}

        <br>

        机构：

        ${item.institution || "未填写"}

        <br>

        账户：

        ${item.account || "未填写"}

        <br>

        金额：

        ¥${Number(item.amount || 0).toLocaleString()}

        <br><br>

        <button onclick="deleteAsset(${index})">

        删除

        </button>

        `;

        list.appendChild(div);

    });

}

// 页面加载时显示已有资产

window.addEventListener(

"load",

function(){

    updateAssetDisplay();

}

);
