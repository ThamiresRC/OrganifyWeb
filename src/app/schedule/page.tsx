"use client";

import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import { parse, startOfWeek, getDay, format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import ReactCalendar from "react-calendar";
import Image from "next/image";
import Link from "next/link";
import "react-calendar/dist/Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "pt-BR": ptBR };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});


interface IEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

export default function AgendaPage() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState<Date | null>(null);
  const [miniCalendarDate, setMiniCalendarDate] = useState<Date>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  useEffect(() => {
    const mockEvents: IEvent[] = [
      {
        id: 1,
        title: "Reunião de Time",
        start: new Date(2025, 3, 9, 10, 0),
        end: new Date(2025, 3, 9, 11, 0),
      },
      {
        id: 2,
        title: "Almoço com cliente",
        start: new Date(2025, 3, 9, 12, 0),
        end: new Date(2025, 3, 9, 13, 0),
      },
    ];
    setEvents(mockEvents);
  }, []);

  const handleOpenModal = (date?: Date, event?: IEvent) => {
    if (date) setNewEventDate(date);
    if (event) setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCreateOrUpdateEvent = () => {
    if (!newEventTitle || !newEventDate) return;

    if (selectedEvent) {
      
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === selectedEvent.id
            ? { ...ev, title: newEventTitle, start: newEventDate, end: newEventDate }
            : ev
        )
      );
    } else {
      
      const newEvent: IEvent = {
        id: Date.now(),
        title: newEventTitle,
        start: newEventDate,
        end: newEventDate,
      };
      setEvents((prev) => [...prev, newEvent]);
    }

    setNewEventTitle("");
    setNewEventDate(null);
    setSelectedEvent(null);
    setShowModal(false);
  };

  const handleSelectSlot = (slotInfo: any) => {
    handleOpenModal(slotInfo.start);
  };

  const handleSelectEvent = (event: IEvent) => {
    setNewEventTitle(event.title);
    setNewEventDate(event.start);
    handleOpenModal(event.start, event);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents((prev) => prev.filter((ev) => ev.id !== selectedEvent.id));
      setShowModal(false);
      setNewEventTitle("");
      setNewEventDate(null);
      setSelectedEvent(null);
    }
  };

  const handleMiniCalendarChange = (value: any, event?: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setMiniCalendarDate(value);
      handleOpenModal(value); 
    } else if (Array.isArray(value) && value.length > 0) {
      setMiniCalendarDate(value[0]);
      handleOpenModal(value[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/imagens/Logo.jfif" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">Organify</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/">
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                Home
              </button>
            </Link>
            <Link href="/login">
              <button className="bg-white text-green-600 px-4 py-2 rounded hover:bg-gray-100 transition">
                Sair
              </button>
            </Link>
          </div>
        </div>
      </header>

      
      <main className="flex flex-1 p-6">
        
        <aside className="hidden md:block w-64 pr-4 border-r">
          <h2 className="text-2xl font-bold mb-4">Agenda</h2>
          <button
            onClick={() => handleOpenModal()}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          >
            + Criar
          </button>
          <div className="mt-6">
            <ReactCalendar
              locale="pt-BR"
              onChange={handleMiniCalendarChange}
              value={miniCalendarDate}
            />
          </div>
        </aside>

        
        <section className="flex-1 pl-4">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "80vh" }}
            selectable={true}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            defaultView="week"
            views={["day", "week", "month"]}
            messages={{
              next: "Próximo",
              previous: "Anterior",
              today: "Hoje",
              month: "Mês",
              week: "Semana",
              day: "Dia",
            }}
            culture="pt-BR"
          />
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <span>
            &copy; {new Date().getFullYear()} Organify. Todos os direitos reservados.
          </span>
        </div>
      </footer>

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">
              {selectedEvent ? "Editar evento" : "Criar novo evento"}
            </h2>
            <label className="block mb-2">
              Título:
              <input
                type="text"
                className="border w-full px-2 py-1"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
              />
            </label>
            <label className="block mb-2">
              Data/Horário:
              <input
                type="datetime-local"
                className="border w-full px-2 py-1"
                value={
                  newEventDate
                    ? new Date(newEventDate.getTime() - newEventDate.getTimezoneOffset() * 60000)
                        .toISOString()
                        .slice(0, 16)
                    : ""
                }
                onChange={(e) =>
                  setNewEventDate(e.target.value ? new Date(e.target.value) : null)
                }
              />
            </label>
            <div className="flex justify-end mt-4 space-x-2">
              {selectedEvent && (
                <button
                  onClick={handleDeleteEvent}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Excluir
                </button>
              )}
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedEvent(null);
                }}
                className="px-4 py-2 border rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateOrUpdateEvent}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}