using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Core.DB;
using Terrasoft.Web.Common;
using System;
using System.Web.SessionState;

[ServiceContract]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
public class RealtyService : BaseService, IReadOnlySessionState
{
    [OperationContract]
    [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
    public decimal GetMinPriceByTypeId(string usrRealtyTypeId, string usrRealtyOfferTypeId, string usrEntityName)
    {
        if (string.IsNullOrEmpty(usrRealtyTypeId) || string.IsNullOrEmpty(usrRealtyOfferTypeId) || string.IsNullOrEmpty(usrEntityName))
        {
            return -1;
        }

        Select select = new Select(UserConnection)
            .Column(Func.Min("UsrPriceUSD"))
            .From(usrEntityName)
            .Where("UsrTypeId").IsEqual(Column.Parameter(new Guid(usrRealtyTypeId)))
            .And("UsrOfferTypeId").IsEqual(Column.Parameter(new Guid(usrRealtyOfferTypeId))) as Select;

        decimal result = select.ExecuteScalar<decimal>();
        return result;
    }

    [OperationContract]
    [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
        RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
   public string GetExampleMin()
     {
         return "OK!";
     }
}
