import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { IFactory } from 'app/models/reducers/factory';

const initialState: IFactory = {
  inspections: [
    {
      category: 'Production details',
      kra: [
        { title: 'Process details (process flow diagram)' },
        { title: 'Installed production capacity' },
        { title: 'Production on the day of inspection' },
        {
          title:
            'Last three months average (collect log book, excise data, GST data)',
        },
        {
          title:
            'Raw material consumption (on date of visit, last three months average)',
        },
        { title: 'By product, if any' },
        { title: 'Source of effluent generation' },
      ],
    },
    {
      category: 'Fresh Water Consumption',
      kra: [
        { title: 'Source of fresh water' },
        { title: 'Meter readings' },
        { title: 'Log Book data' },
        {
          title:
            'Estimation of fresh water consumption (On date of visit, last three months average)',
        },
        {
          title:
            'Estimate specific water consumption (On date of visit, last three months average)',
        },
      ],
    },
    {
      category: 'Effluent Generation',
      kra: [
        { title: 'Meter readings' },
        { title: 'Log Book data' },
        {
          title:
            'Estimation of effluent generation (on date of visit, last three months average)',
        },
        {
          title:
            'Estimate specific effluent generation (on date of visit, last three months average)',
        },
        {
          title:
            'Estimate effluent recycled within manufacturing process (with meter readings, log book data, etc.)',
        },
        {
          title:
            'Estimate effluent discharge (on date of visit, last three months average)',
        },
      ],
    },
    {
      category: 'Monitoring of ETP',
      kra: [
        { title: 'Treatment technology (physico-chemical/ biological)' },
        { title: 'Components of ETP' },
        {
          title: 'Details of ETP system (flow diagram etc,)',
        },
        {
          title: 'Installed capacity',
        },
        {
          title: 'Utilized capacity',
        },
        {
          title: 'Name and size of sub units',
        },
        {
          title: 'Mode of aeration (surface aerator/ diffusers)',
        },
        {
          title: 'Oxygenation/aeration rate in aeration tank',
        },
        { title: 'Chemical consumption' },
        {
          title:
            'Type of clarifier (conventional/ lamella clarifier/ tube settler)',
        },
        { title: 'Provision for sludge recycling' },
        { title: 'Sludge withdrawal/dewatering mechanism' },
        { title: 'Adequacy of ETP system' },
        {
          title: 'Adequacy assessment report if any',
        },
        {
          title: 'Performance assessment report if any',
        },
        {
          title:
            'Estimation of sludge generation (on date of visit, last three months average)',
        },
        {
          title: 'Mode & method for treatment/ disposal of ETP sludge',
        },
        {
          title: 'Skilled ETP operator',
        },
        {
          title: 'Availability of environmental lab.',
        },
      ],
    },
    {
      category: 'Treated effluent discharge',
      kra: [
        { title: 'Influent quality (pH, BOD, COD, TSS etc.) ' },
        { title: 'Effluent quality (pH, BOD, COD, TSS, etc.)' },
        { title: 'MLSS & MLVSS from aeration tank' },
        { title: 'Mode of discharge' },
        { title: 'No. of outlets' },
        { title: 'Recipient drain/ river' },
        {
          title:
            'Wastewater quality of recipient drain/ river at upstream & downstream locations',
        },
        {
          title: 'Estimated pollution load',
        },
      ],
    },
    {
      category:
        'Molasses based distillery, Sampling locations: (pH, BOD, COD, TSS, Total Solid)',
      kra: [
        { title: 'Sampling at analyser column outlet ' },
        { title: 'Inlet & outlet of bio methanation' },
        { title: 'Inlet & outlet of RO & MEE' },
        { title: 'Inlet of incineration' },
        { title: 'Storage lagoons for bio composting/ incineration' },
        { title: 'Spent wash being used for composting' },
        { title: 'Inlet & outlet of CPU' },
        {
          title:
            'Wastewater quality of recipient drain/ river at upstream & downstream locations',
        },
      ],
    },
    {
      category: 'Data Verification',
      kra: [
        {
          title: 'Meter readings of mass flow meters at inlet & outlet of MEE ',
        },
        { title: 'Production' },
        { title: 'Spent wash generation' },
        { title: 'Estimate specific spent wash generation' },
        { title: 'Volume of lagoons' },
        { title: 'Estimate adequacy of lagoon capacity' },
        { title: 'Area of active compost yard (covered/ uncovered)' },
        {
          title: 'Estimate adequacy of compost yards',
        },
        {
          title: 'Estimate press mud used, compost produced, etc.',
        },
        {
          title: 'Verification of ZLD',
        },
      ],
    },
    {
      category: 'Verification of ZLD',
      kra: [
        {
          title:
            'Verify fresh water consumption, effluent generation & recycling.',
        },
        {
          title:
            'Estimate specific fresh water consumption(should not be more than process water loss or 2 m3/ Ton of product).',
        },
      ],
    },
    {
      category: 'Recipient drain/stream',
      kra: [
        {
          title: 'Location of sample collected',
        },
        {
          title:
            'Wastewater sample at upstream & downstream locations recipient drain/stream.',
        },
        {
          title:
            'Critical analysis of wastewater quality of recipient drain/ river w.r.t. quality of effluent being discharged by responsible unit.',
        },
      ],
    },
    {
      category: 'Sample Collection procedure',
      kra: [
        {
          title:
            'As mandated in Rule no 21 of Water(Prevention and Control of Pollution) Act, 1974',
        },
        {
          title:
            'Serving notices of inspection and sample collection and providing duplicate/ parallel samples to the unit',
        },
      ],
    },
    {
      category: 'Analysis of samples',
      kra: [
        {
          title:
            'E(P)A, 1986 recognized laboratory (preferred)/ Institute`s own laboratory/ SPCB labs',
        },
      ],
    },
    {
      category: 'Solid/ Hazardous wastes',
      kra: [
        {
          title: 'Generated quantity',
        },
        {
          title: 'Log Book data',
        },
        {
          title: 'Source of generation',
        },
        {
          title: 'Membership status',
        },
        {
          title: 'Mode & method for treatment/ disposal',
        },
        {
          title: 'Form - 4 and Form - 10',
        },
      ],
    },
    {
      category: 'Flow meters',
      kra: [
        {
          title: 'Type of meter (mechanical/digital/electromagnetic etc.)',
        },
        {
          title: 'Reading of meters',
        },
        {
          title: 'Frequency of calibration',
        },
        {
          title: 'Date of last calibration',
        },
        {
          title: 'Calibration due date',
        },
      ],
    },
    {
      category: 'Fuel/ power consumption',
      kra: [
        {
          title: 'Type of fuel used',
        },
        {
          title:
            'Record of fuel consumption data (On date of visit, last three months average)',
        },
        {
          title:
            'Total power consumption (On date of visit, last three months average)',
        },
        {
          title:
            'Power consumption at ETP (On date of visit, last three months average)',
        },
      ],
    },
  ],
};

export const factoryReducer = createReducer(initialState, {});
