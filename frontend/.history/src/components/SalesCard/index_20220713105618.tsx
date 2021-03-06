function SalesCard() {
    return (
        <>
            <div class="dsmeta-card">
                <h2 class="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div class="dsmeta-form-control-container">
                        <input class="dsmeta-form-control" type="text" />
                    </div>
                    <div class="dsmeta-form-control-container">
                        <input class="dsmeta-form-control" type="text" />
                    </div>
                </div>

                <div>
                    <table class="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th class="show992">ID</th>
                                <th class="show576">Data</th>
                                <th>Vendedor</th>
                                <th class="show992">Visitas</th>
                                <th class="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="show992">#341</td>
                                <td class="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td class="show992">15</td>
                                <td class="show992">11</td>
                                <td>R$ 553000.00</td>
                                <td>
                                    <div class="dsmeta-red-btn-container">
                                        <div class="dsmeta-red-btn">
                                            <img
                                                src="notification-icon.svg"
                                                alt="Notificar"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="show992">#341</td>
                                <td class="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td class="show992">15</td>
                                <td class="show992">11</td>
                                <td>R$ 553000.00</td>
                                <td>
                                    <div class="dsmeta-red-btn-container">
                                        <div class="dsmeta-red-btn">
                                            <img
                                                src="notification-icon.svg"
                                                alt="Notificar"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="show992">#341</td>
                                <td class="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td class="show992">15</td>
                                <td class="show992">11</td>
                                <td>R$ 553000.00</td>
                                <td>
                                    <div class="dsmeta-red-btn-container">
                                        <div class="dsmeta-red-btn">
                                            <img
                                                src="notification-icon.svg"
                                                alt="Notificar"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SalesCard;
