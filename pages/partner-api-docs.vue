<template>
  <div class="">

    <div class="container">
      <div class="container news-page-top ">
        <h1>{{ $t('page.partner_api.title') }}</h1>
      </div>
    </div>

    <div class="container p20 item-page">
      <h4 class="title">
        {{ $t('page.partner_api.subtitle-1') }}
      </h4>
      <div>
        <b>
          {{ $t('page.partner_api.text-1') }}</b>
        <p>
          {{ $t('page.partner_api.text-2') }}
        </p>
        <br />
        <center>
          <img src="~/assets/img/partner-url.png" style="max-width: 900px" />
        </center>
        <br />
        <br />
        <b>
          {{ $t('page.partner_api.text-3') }}
        </b>
        <br />
        <br />
        <p>
          {{ $t('page.partner_api.text-4') }}
          <br />
          {{$t('page.partner_api.text-4-1')}} <b>{{ $rest.baseUrl }}/ref/XXXXXX/?cur_from=PMUSD&cur_to=BTC</b>
        </p>
      </div>
      <br />
      <br />
      <b>
        {{ $t('page.partner_api.text-5') }}
      </b>
      <br />
      <br />
      <div>
        <b>XML</b>
        <p>{{ $rest.servicePath }}/export/xml/:code</p>
        <b>JSON</b>
        <p>{{ $rest.servicePath }}/export/json/:code</p>
        <b>TXT</b>
        <p>{{ $rest.servicePath }}/export/txt/:code</p>
      </div>
    </div>
    <div class="container p20">
      <h4 class="title">
        {{ $t('page.partner_api.subtitle-2') }}
      </h4>
      <b>
        {{ $t('page.partner_api.text-6') }}
      </b>
      <br />
      <br />
      <p>
        {{ $t('page.partner_api.text-7') }}
      </p>
      <br />
      <center>
        <img src="~/assets/img/get-api-key.png" style="max-height: 400px;" />
      </center>

      <b>
        {{ $t('page.partner_api.text-8') }}
      </b>
      <br />
      <br />
      <p>
        URL: {{ $rest.servicePath }}/partner/api.php
        <br />
        <br />
        <div v-html="$t('page.partner_api.text-9')"></div>
        
      <!--   <b>Передаваемые GET параметрами:</b> <br /><br />
        <code>api_action</code> – pp <br />
        <code>api_key</code> – ваш личный ключ <br />
        <code>method</code> – метод АПИ модуля
       -->
        <br />
        <br />
        {{ $t('page.partner_api.text-10') }}
      </p>


      <br />
      <hr />
      <p><b>get_info</b>{{ $t('page.partner_api.text-11') }}</p>
      <h5>
        {{ $t('page.partner_api.subtitle-4') }}
      </h5>
      <div class="table__param" style="border: 1px solid;padding: 5px;margin: 10px">
        <table>
          <thead>
            <tr style="font-weight: bold;">
              <td width="200px">Name</td>
              <td width="100px">Type</td>
              <td width="100px">Required</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4">
                {{ $t('page.partner_api.text-12') }}
                Дополнительные параметры не принимаются
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5>
        {{ $t('page.partner_api.subtitle-3') }}
      </h5>
      <pre>
{
  status: "success",
  error: 0,
  error_text: "",
  data: {
    balance: 15,
    totalReceived: 0,
    link: "test",
    min_payout: 99999999,
    items: { },
  },
}
      </pre>
      <br />
      <hr />
      <p><b>get_exchanges</b>{{ $t('page.partner_api.text-13') }}</p>
      <h5>
        {{ $t('page.partner_api.subtitle-4') }}
      </h5>


      <div class="table__param" style="border: 1px solid;padding: 5px;margin: 10px">
        <table>
          <thead>
            <tr style="font-weight: bold;">
              <td width="200px">Name</td>
              <td width="100px">Type</td>
              <td width="100px">Required</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                start_time
              </td>
              <td>
                Integer
              </td>
              <td>
                No
              </td>
              <td>
                время, с которого выводить данные (unix)
              </td>
            </tr>
            <tr>
              <td>
                end_time
              </td>
              <td>
                Integer
              </td>
              <td>
                No
              </td>
              <td>
                время, до которого выводить данные (unix)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5>
        {{ $t('page.partner_api.subtitle-3') }}
      </h5>
      <pre>
{
  status: "success",
  error: 0,
  error_text: "",
  data: {
    items: {
      1895: {
        id: 1895,
        time: 1590356264,
        date: "2020-05-24 21:37:44",
        course_give: 0,
        course_get: 241.57,
        amount_give: 0,
        amount_get: 241.57,
        exchange_success: 1,
        accrued: 1,
        partner_reward: 0,
        user_hash: "1r7",
      }
    }
  }
}
      </pre>
      <br />
      <hr />
      <p><b>get_links</b>{{ $t('page.partner_api.text-14') }}</p>
      <h5>
        {{ $t('page.partner_api.subtitle-4') }}
      </h5>
      <div class="table__param" style="border: 1px solid;padding: 5px;margin: 10px">
        <table>
          <thead>
            <tr style="font-weight: bold;">
              <td width="200px">Name</td>
              <td width="100px">Type</td>
              <td width="100px">Required</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                start_time
              </td>
              <td>
                Integer
              </td>
              <td>
                No
              </td>
              <td>
                время, с которого выводить данные (unix)
              </td>
            </tr>
            <tr>
              <td>
                end_time
              </td>
              <td>
                Integer
              </td>
              <td>
                No
              </td>
              <td>
                время, до которого выводить данные (unix)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5>
        {{ $t('page.partner_api.subtitle-3') }}
      </h5>

      <pre>
{
  status: "success",
  error: 0,
  error_text: "",
  data: {
    items: {
      1631577600: {
        id: 1631577600,
        time: 1631577600,
        date: "2021-09-14 00:00:00",
        browser: "Unknown",
        ip: "0.0.0.0",
        referrer: "",
        user_hash: "613fe600",
        query_string: ""
      }
    }
  }
}
      </pre>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
table {
  width: 100%;
}
</style>
