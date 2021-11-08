import axios from "axios";

const BASE_URL = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bce01ad2-916c-4cc8-9198-6c8e2c2854b2/acme_inc_payroll.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211108T002337Z&X-Amz-Expires=86400&X-Amz-Signature=5544650ce1ee34e97e451424aca1d42a40e4ca9ed9f98b34370fe0fe366ac3f6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acme_inc_payroll.json%22"
class Api {
    public url: string;
    public config: {};
    constructor(url: string = BASE_URL, config: {} = {}) {
        this.url = url;
        this.config = config;
    }

    async getPayroll(): Promise<void> {
        const res = await axios.get(this.url, this.config)
        return res.data;
    }
}

export default Api;