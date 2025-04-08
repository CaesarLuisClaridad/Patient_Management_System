import React from 'react'

const Oxygen_Support = ({ formData, setFormData }) => {
  return (
     <>
        <div
            class="shadow mt-3"
          >
            <table class="table table-bordered">
              <thead class="table-success text-center">
                <tr>
                  <th colspan="4">
                    Oxygen: <input type="radio" name="oxygen" id="required" />
                    <label for="required">required</label>
                    <input
                      type="radio"
                      name="oxygen"
                      id="not-required"
                      class="ms-3"
                    />
                    <label for="not-required">not required</label>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Give:
                    <input type="text" class="form-control d-inline w-25" /> lpm
                    via:{" "}
                    <input type="text" class="form-control d-inline w-50" />
                  </td>
                  <td>
                    Time start/end: <input type="text" class="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Give:
                    <input type="text" class="form-control d-inline w-25" /> lpm
                    via:{" "}
                    <input type="text" class="form-control d-inline w-50" />
                  </td>
                  <td>
                    Time start/end: <input type="text" class="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>
                    Give:
                    <input type="text" class="form-control d-inline w-25" /> lpm
                    via:{" "}
                    <input type="text" class="form-control d-inline w-50" />
                  </td>
                  <td>
                    Time start/end: <input type="text" class="form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
     </>
  )
}

export default Oxygen_Support